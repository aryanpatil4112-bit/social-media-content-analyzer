import { useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import Features from "../components/Features";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await api.post("/api/upload", formData);
console.log("Response:", response.data);

      setUploadStatus("✅ File uploaded successfully!");
    } catch (error) {
  console.error("Upload Error:", error);

  if (error.response) {
    console.log("Response:", JSON.stringify(response.data, null, 2));
  }

  setUploadStatus("❌ Upload failed.");
}
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <Hero />

      <UploadBox
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      <div className="flex justify-center mt-8">
        <button
          onClick={handleUpload}
          className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold text-white"
        >
          Analyze Content
        </button>
      </div>

      {uploadStatus && (
        <p className="text-center mt-4 text-lg text-cyan-400">
          {uploadStatus}
        </p>
      )}

      <Features />
    </div>
  );
}

export default Home;