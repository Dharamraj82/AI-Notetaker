import React, { useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Upload() {
  const [instruction, setInstruction] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = fileInputRef.current.files[0];

    if (!instruction || !file) {
      setError("⚠️ Please provide both an instruction and a transcript file.");
      return;
    }
    try {
      setError("");
      setLoading(true); 

      // Prepare form data
      const formData = new FormData();
      formData.append("prompt", instruction);
      formData.append("file", file);

      // Send to backend
      const res = await axios.post(
        "http://localhost:3000/api/ai/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data.response?._id);

      if (res.data.response?._id) {
        navigate(`/summary/${res.data.response._id}`);
      } else {
        setError(" Nothing is returned from server.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong while uploading.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-2">
      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}

      {loading ? ( 
        <Loader/>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl  p-10 flex flex-col gap-8"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
            Upload Your Transcript
          </h2>

          {/* Textarea with upload button inside */}
          <div className="relative">
            <textarea
              className="w-full min-h-[120px] rounded-xl border border-gray-200 bg-gray-50 p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none shadow-sm pr-12"
              placeholder="Enter your custom instruction or prompt here..."
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
            {/* Upload button inside textarea */}
            <button
              type="button"
              className="absolute bottom-3 right-3 p-2 rounded-full hover:bg-blue-100 transition-colors"
              onClick={handleIconClick}
              aria-label="Upload .txt file"
            >
              <FiPaperclip className="h-5 w-5 text-blue-600" />
            </button>
            <input
              type="file"
              accept=".txt"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Show uploaded file name */}
          {fileName && (
            <p className="text-lg font-semibold text-green-500 italic">
              Uploaded: <span className="font-medium">{fileName}</span>
            </p>
          )}

          {/* Summarize Button */}
          <span onClick={handleSubmit} className="w-full flex justify-center">
            <Button text={"Generate Summary"} />
          </span>
        </form>
      )}
    </main>
  );
}

export default Upload;
