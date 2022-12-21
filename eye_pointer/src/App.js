import React from "react";
import Button from "@mui/material/Button";
import { Box, margin } from "@mui/system";
import bg from "./images/bg.jpg";

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
        <h1>HEllo</h1>
      </div>
    </div>
  );
}

export default App;
