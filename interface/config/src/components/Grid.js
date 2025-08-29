import { useState } from 'react'
// Grid.js
import React from "react";

function Square({ active }) {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        backgroundColor: active ? "lime" : "black",
        border: "1px solid #333333",
      }}
    />
  );
}

export default function Grid({ pos, rows = 50, cols = 50 }) {
  return (
    <div className="mb-3">
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
