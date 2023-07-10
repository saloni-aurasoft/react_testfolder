import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase(); //this is js function whichuse to convert text into capital
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked :" + text);
    let newText = text.toLowerCase(); //this is js function whichuse to convert text into small
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("ClearField");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState(
    "this is an app which converts any text to uppercase. used concepts- state, useState hooks{text, setText state},event, 2 event listens - onclick(handleupclick) & onchange(handleonchange)"
  );
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3" style={{color: props.mode==='black'?'white':'black'}} >
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}                              //we use value={text} here to give the text into textbox
          onChange={handleOnChange}
        // style={{backgroundColor: props.mode==='light'? 'dark' : 'light'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To Uppercase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert To Lowercase
      </button>

      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        CLear Field
      </button>

      {/* 2. we will add more functionality - on typing count characters and words  */}

      <div className="container">
        <h4>Words and Characters Counter</h4>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <h4> Time Counter</h4>
        {/* 3. adding reading time per words */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h4>Preview</h4>
        {/* 4. adding preview option */}
        <p>{text.length>0 ? text:"enter your thoughts to preview"}</p>
      </div>
    </div>
  );
}
