import React from "react";
const App = () => {
  const downloadVideo = async (event) => {
    event.preventDefault();
    const url = "https://media.icc-cricket.com/dev/video/29779994-movie1.mp4";
    try {
      // Fetch the file as a blob
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = "movie1.mp4";
      document.body.appendChild(anchor);
      anchor.click();
      // Clean up
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <a
      href="https://media.icc-cricket.com/dev/video/29779994-movie1.mp4"
      onClick={downloadVideo}
    >
      Download Video
    </a>
  );
};
export default App;