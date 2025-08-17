import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader"; // import your loader component
import { useNavigate } from "react-router-dom";

const Share = ({ onClose, id }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // new loading state
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      setLoading(true); // start loader
      setMessage("");

      // Call the backend API
      const res = await axios.post(`http://localhost:3000/api/ai/share/${id}`, {
        email,
      });

      if (res.data.success) {
        setMessage("Summary shared successfully!");
        setTimeout(() => {
          navigate("/upload");
        }, 1000);
      } else {
        setMessage("Failed to share summary.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong while sharing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="relative max-w-md w-full p-6 bg-white shadow-lg rounded-lg text-center">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10">
            <Loader />
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold z-20"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4">Share with someone</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border lowercase border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Share
          </button>
        </form>
        {message && (
          <p className="mt-4 text-red-600 font-medium transition-opacity duration-500">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Share;
