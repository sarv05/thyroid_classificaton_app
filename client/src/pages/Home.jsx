import React from 'react';

export default function Home() {

  // Function to handle button click and redirect to the Streamlit app
  const handleButtonClick = () => {
    window.location.href = "https://thyroid-detection-app.streamlit.app/"; // Replace with your Streamlit app's URL
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center mt-20">
        <button className="bg-sarv-400 hover:bg-red-700 text-white py-4 px-6 rounded-lg" onClick={() => handleButtonClick()}>
          Classification based on the Dataset
        </button>
        <button className="bg-sarv-400 hover:bg-red-700 text-white py-4 px-6 rounded-lg mt-4" onClick={() => handleButtonClick()}>
          Image Classification
        </button>
      </div>
    </div>
  );
}
