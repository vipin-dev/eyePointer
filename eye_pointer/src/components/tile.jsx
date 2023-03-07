import React from "react";
import Draggable from 'react-draggable';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";

function Tile(props) {
  return(
      <Draggable bounds="parent" >
          <BoxStyle>
            <TileStyle>
            <TextField style={{margin:"5px"}} size="small" id="outlined" type="search" />
              <ButtonStyle>
                <Button variant="outlined" size="small"> DELETE</Button>
                <Button variant="outlined" size="small" type="submit">OK</Button>
              </ButtonStyle>
            </TileStyle> 
          </BoxStyle>
      </Draggable>
    );
}

const BoxStyle=styled.div`
  max-height:min-content;
  max-width:max-content;
`
const TileStyle = styled.div`
  cursor: move;
  color: black;
  border:2px solid black;
  border-radius: 5px;
  user-select: none;
  display:flex;
  padding:1px;
  flex-direction:column;
  box-shadow: 10px 10px 21px -10px rgba(0,0,0,0.54);
`

const ButtonStyle=styled.div`
  display:flex;
  justify-content:space-between;
  padding:0;
  margin:5px;
`
export default Tile;
