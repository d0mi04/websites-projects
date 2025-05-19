import React from "react";
import "./PixelGrid.css";

const PixelGrid = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((cell, index) => (
        <div key={index} className="gridItem"
        style={{
            backgroundColor: cell.color,
            gridColumnStart: cell.x + 1,
            gridRowStart: cell.y + 1,
        }}
        ></div>
      ))}
    </div>
  );
};

export default PixelGrid;