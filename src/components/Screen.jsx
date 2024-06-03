import React from "react";

export default function Screen({ value }) {
  return (
    <div className="w-full mb-4 p-4 bg-gray-800 rounded-lg">
      <input
        type="text"
        className="w-full h-20 text-right text-3xl bg-gray-800 text-white"
        disabled
        value={value}
      />
    </div>
  );
}
