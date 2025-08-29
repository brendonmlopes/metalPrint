import { useState } from 'react'
import 'animate.css'
// Grid.js
import React from "react";

function Square({ active }) {
  return (
    <div
      className="animate__animated animate__bounceIn"
      style={{
        width: 10,
        height: 10,
        backgroundColor: active ? "lime" : "#666666",
        border: "1px solid #333333",
        borderRadius:10
      }}
    />
  );
}

export default function Grid({ pos, rows = 50, cols = 50 }) {
  return (
    <div className="mb-5">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {Array.from({ length: cols }).map((_, colIndex) => {
            const active = rowIndex === pos.row && colIndex === pos.col;
            return <Square key={colIndex} active={active} />;
          })}
        </div>
      ))}
    </div>
  );
}
