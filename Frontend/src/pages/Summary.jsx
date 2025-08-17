import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FiRefreshCcw, FiShare2 } from "react-icons/fi";
import axios from "axios";
import Loader from "../components/Loader"; // import your loader component
import Share from "../components/Share";

function Summary() {
  const { id } = useParams();
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true); // start with true
  const [error, setError] = useState(null);
  const textareaRef = useRef(null);
  const editableRef = useRef(null);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/ai/latest/${id}`
        );
        setSummary(
          res.data?.aiResponse || "No summary available OR summary deleted..."
        );
      } catch (err) {
        setError("Failed to fetch summary");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [id]);

  const handleSaveAndShare = async () => {
    if (!summary) {
      setError("Summary cannot be empty.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.put(`http://localhost:3000/api/ai/update/${id}`, {
        aiResponse: summary,
      });

      if (res.data.success) {
     setShowShare(true)
      } else {
        setError("Failed to update summary.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while updating.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px"; // adjust
    }
  }, [summary]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <>
      {showShare && <Share onClose={() => setShowShare(false)} id={id} />}
      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="w-full max-w-4xl shadow-lg rounded-2xl border border-zinc-100 p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Summary
          </h2>

          <div
            ref={editableRef}
            contentEditable
            className="prose max-w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 min-h-[200px] overflow-auto"
            dangerouslySetInnerHTML={{ __html: summary }}
            onInput={(e) => setSummary(e.currentTarget.innerHTML)}
          />

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Link
              to={"/upload"}
              className="flex items-center gap-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transition"
            >
              <FiRefreshCcw className="text-lg" />
              Generate Again
            </Link>

            <button
              onClick={async () => {
                await handleSaveAndShare(); // save/update the summary first
                setShowShare(true); // then show the share modal
              }}
              className="flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition"
            >
              <FiShare2 className="text-lg" />
              Save & Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
