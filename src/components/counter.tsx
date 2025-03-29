"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  function handleResetCount() {
    setCount(0);
  }
  return (
    <div>
      <div>Counter: {count}</div>
      <div className="flex gap-2">
        <button
          className="bg-cyan-500 px-4 py-2 rounded-lg"
          onClick={handleIncCount}
        >
          +
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg"
          onClick={handleResetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
