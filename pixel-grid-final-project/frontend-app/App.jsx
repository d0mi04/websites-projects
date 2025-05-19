import React, {useState, useEffect} from "react";
import PixelGrid from "../PixelGrid";
import "./App.css";

const URL = process.env.BACKEND_URL;

const App = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    fetch(`${URL}/grid`)
      .then((response) => response.json())
      .then((data) => setGrid(data.grid))
      .catch((error) => console.log("Error fetching grid data: ", error));
  }, []);

  return (
    <div className="content-wrapper">
        <h1>Pixel Grid</h1>
        <PixelGrid grid={grid} />
    </div>
  );
};

export default App;