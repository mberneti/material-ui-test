import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import CustomButton1 from "./components/customButton1/CustomButton1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi Beauty! 🖐</p>
        <br />
        <Button disableElevation disableRipple variant="contained">
          hi
        </Button>
        <br />
        <CustomButton1 />
      </header>
    </div>
  );
}

export default App;
