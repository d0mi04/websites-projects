import React, {useState, useEffect} from "react";
import PixelGrid from "./PixelGrid";
import Toolbar from "./Toolbar";
import "./App.css";

const URL = process.env.BACKEND_URL;

const App = () => {
  const [grid, setGrid] = useState([]);
  const [selectedColor, setSelectedColor] = useState("black");

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) => console.log("Error fetching grid data: ", error));
  }, []);

  async function updateColor (x, y) {
    try {
      const response = await fetch(`${URL}/setGridColor`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ x, y, color: selectedColor }),
      });
      const { grid: updatedGrid } = await response.json();
      setGrid(updatedGrid);
    } catch (error) {
      console.error("Error updating grid color:", error);
    }
  }

  return (
    <div className="content-wrapper">
        <h1>Pixel Grid</h1>
        <PixelGrid grid={grid} updateColor={updateColor} />
        <Toolbar selectedColor="selectedColor" setSelectedColor="setSelectedColor" />
    </div>
  );
};

export default App;