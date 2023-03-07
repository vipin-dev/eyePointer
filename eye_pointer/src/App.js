import React from "react";
import Tile from "./components/tile";
import styled from "styled-components";
import Button from "@mui/material-next/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function App() {
    let text="Hello My Dear";
  return (
    <WorkPage>
        <Buttons>
            <Button size="small" variant="outlined" startIcon={<AddCircleIcon/>}> </Button>
            <Button size="small" variant="outlined"> About Us </Button>
        </Buttons>
        <WorkSpace>
            <Tile text={text} />
        </WorkSpace>
    </WorkPage>
  );
}


const WorkPage = styled.div`
    overflow: "hidden";
    position:relative;
    height:700px;
    width:1300px;
`;

const WorkSpace=styled.div`
    position:absolute;
    left:66px;
    top:66px;
    right:66px;
    height:600px;
    width:inherit;
    border: 6px solid black;
    border-radius: 4px;
    background-color: white;
`

const Buttons=styled.div`
    position:absolute;
    top:15px;
    left:66px;
    width:inherit;
    display:flex;
    justify-content:space-between;
`
export default App;
