"use client"
import React, { useState } from 'react';

const FileUploadWindow: React.FC<{ setShowFileUpload: (show: boolean) => void }> = ({ setShowFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('your_upload_endpoint', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const progressPercent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setProgress(progressPercent);
        },
      });

      if (response.ok) {
        // File uploaded successfully
        // Handle any additional logic here
      } else {
        // Handle error case
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl mb-4">Upload File</h2>
        <input type="file" onChange={handleFileChange} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleUpload} disabled={!file}>
          Upload
        </button>
        {progress > 0 && (
          <div className="mt-4">
            <div className="bg-gray-200 h-4 rounded-md overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
              ></div>
            </div>
            <div className="text-xs mt-1">{progress}% completed</div>
          </div>
        )}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => setShowFileUpload(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FileUploadWindow;
