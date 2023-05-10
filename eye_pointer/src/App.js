import React, { useState } from "react";
import Tile from "./components/tile";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Button from "@mui/material-next/Button";

function App() {
  const [tiles, setTiles] = useState([]);
  console.log(tiles);
  const addTiles = () => {
    setTiles((prevTiles) => [...prevTiles, { id: uuidv4() }]);
  };

  const deleteTile = (id) => {
    setTiles((prev) => {
      return prev.filter((item) => {
        console.log(item.id, id);
        return item.id !== id;
      });
    });
  };

  return (
    <WorkPage>
      <Buttons>
        <button
          onClick={addTiles}
          // size="small"
          // variant="outlined"
          // startIcon={<AddCircleIcon />}
        >
          Click
        </button>
        <Button size="small" variant="outlined">
          About Us
        </Button>
      </Buttons>
      {/* <EyeTrackingDemo /> */}
      <WorkSpace>
        {tiles.map((tile) => {
          return <Tile key={tile.id} id={tile.id} deleteTile={deleteTile} />;
        })}
      </WorkSpace>
    </WorkPage>
  );
}

const WorkPage = styled.div`
  overflow: "hidden";
  position: relative;
  height: 700px;
  width: 1300px;
`;

const WorkSpace = styled.div`
  position: relative;
  left: 66px;
  top: 66px;
  height: 600px;
  width: inherit;
  border: 6px solid black;
  border-radius: 4px;
  background-color: white;
`;

const Buttons = styled.div`
  position: absolute;
  top: 15px;
  left: 66px;
  width: inherit;
  display: flex;
  justify-content: space-between;
`;
export default App;
