import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function loading() {
  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
      <ClipLoader
        color="#000"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
