// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  //its a package where browserrouter switch route link will be render

function App() {
  //giving dark mode and light mode control in app.js
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  //creating alert state
  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {

    setalert({
      msg: message,
      typ: type

    })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      // settoggleText("Disable Dark Mode")
      document.body.style.backgroundColor = "#042743";  //body of page
      showAlert('sucess', 'dark mode enabled');
      document.title = 'dark -mode enabled';
      setInterval(() => {
        // window.location.reload();
        document.title = "you have won 10rs"
      }, 2000);
      setInterval(() => {
        // window.location.reload();
        document.title = "visit us more for price"
      }, 1500);
    }
    else {
      {
        setMode('light');
        // settoggleText("Enable Dark Mode")
        document.body.style.backgroundColor = "white";
        showAlert('sucess', 'dark mode disabled');
        document.title = 'dark -mode disabled';
      }
    }
  }

  return (
    <>
      {/* we shifted the whole html into navbar.js file and only kept <Navbar /> so we can use this further*/}
      {/*navbar is our component and inside it these ar the values we are giving to it according to us with the help of props */}

      {/* <BrowserRouter> */}
      {/* <Link to={<TextForm />}> Home </Link> */}
       
      {/* <div className="container my-md-5"> */}
      <Router>
        {/* while setting router put navbar below router tag */}
        <Navbar
          title="ReactApp"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={
            <TextForm heading="Try React app to convert your thoughts into reality" mode={mode} showAlert={showAlert} />
          } />
          <Route exact path="/about" element={<About />}> About </Route>
        </Routes>
      </Router>
      {/* </div> */}
      {/* <About /> */}
    </>
  );
}

export default App;