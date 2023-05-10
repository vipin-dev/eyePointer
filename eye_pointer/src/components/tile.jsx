import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function Tile(props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [buttonName, setButtonName] = useState("EDIT");
  function stopEventHandler(e, dragElement) {
    console.log("Drag X" + dragElement.x, dragElement.y);
    console.log("Client X" + e.clientX, e.clientY);
    //Need to store this dragElement.x and y to restore the position after refresh
  }

  function handleDisable() {
    setIsDisabled(!isDisabled);
    buttonName === "EDIT" ? setButtonName("DONE") : setButtonName("EDIT");
  }

  return (
    <Draggable
      onStop={stopEventHandler}
      bounds="parent"
      // defaultPosition={{ x: 1184, y: 202 }} //We need to pass the x and y value from DB
    >
      <BoxStyle>
        <TileStyle>
          <TextField
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
            }}
            style={{ margin: "5px" }}
            inputProps={{ style: { fontSize: 20, textAlign: "center" } }}
            size="small"
            id="outlined"
            type="search"
            disabled={isDisabled}
          />
          <ButtonStyle>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                console.log(props);
                props.deleteTile(props.id);
              }}
              disabled={isDisabled}
            >
              {" "}
              {"DELETE"}
            </Button>
            <Button
              variant="outlined"
              size="small"
              type="submit"
              onClick={handleDisable}
            >
              {buttonName}
            </Button>
          </ButtonStyle>
        </TileStyle>
      </BoxStyle>
    </Draggable>
  );
}

const BoxStyle = styled.div`
  max-height: min-content;
  max-width: max-content;
`;
const TileStyle = styled.div`
  cursor: move;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  user-select: none;
  display: flex;
  padding: 1px;
  flex-direction: column;
  box-shadow: 10px 10px 21px -10px rgba(0, 0, 0, 0.54);
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 5px;
`;
export default Tile;
