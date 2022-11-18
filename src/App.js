import "./App.css";
import Navbar from "./conponent/Navbar";
import TextForm from "./conponent/TextForm";
// import About from "./conponent/About";
import React, { useState } from "react";
import Alert from "./conponent/Alert";
// import {
//   BrowserRouter as Router,
  
//   Routes,
//   Route
  
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  let showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const [mode, setMode] = useState({
    color: "black",
    background: "light",
  });
  let toggleMode = () => {
    if (mode.background === "dark") {
      setMode({
        color: "black",
        background: "light",
      });
      showalert("light mode has been enabled", "Success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light Mode ";
    } else {
      setMode({
        color: "white",
        background: "dark",
      });
      showalert("Dark mode has been enabled", "Success");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils-Dark Mode ";
    }
    // setInterval(() => {
    //   document.title = "TextUtils is amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title = " install TextUtils now ";
    // }, 1500);
  };
  return (
    <>
    
      {/* <Navbar title='utilites' AboutText='About Us'/> */}
      {/* <Router> */}
      <Navbar
        title="utilites"
        background={mode.background}
        color={mode.color}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3 ">
      
      {/* <Routes>
        <Route exact path="/" element={<TextForm
          heading="Enter the text to analysis "
          mode={mode.background}
          showalert={showalert}
        />} />
        <Route exact path="/about" element={<About />} />
      </Routes> */}
      
      <TextForm
          heading="Enter the text to analysis "
          mode={mode.background}
          showalert={showalert}
        />
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
