"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >Inc</button>
    </div>
  );
}
