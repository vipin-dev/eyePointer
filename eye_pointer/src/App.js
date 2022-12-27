import React from "react";
import Button from "@mui/material/Button";
import { Box, margin } from "@mui/system";
import bg from "./images/bg.jpg";
import Tile from "./components/tile";

function App() {
  return (
    <div
      className="webpage"
      style={{ backgroundImage: `url(${bg})`, paddingBottom: "30px" }}
    >
      <Box sx={{ textAlign: "right", padding: "10px" }}>
        <Button variant="contained">About Us</Button>
      </Box>
      <div className="workspace">
        <Tile />
      </div>
    </div>
  );
}

export default App;
