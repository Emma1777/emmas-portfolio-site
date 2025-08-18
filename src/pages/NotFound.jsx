// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-whitish-bg px-4 text-center">
      <h1 className="text-6xl font-bold text-blueish-text">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blueishbutton-bg text-black px-6 py-2 rounded hover:opacity-90"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
