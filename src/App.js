import React from "react";
import Buttons from "./components/buttons";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
