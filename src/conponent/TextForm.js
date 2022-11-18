import React, { useState } from "react";

export default function TextForm(prpos) {
  const [text, setText] = useState("");
 
  let Changetext = (event) => {
    console.log("change text function is called");
    setText(event.target.value);
  };
  let ChangetoUpCase = () => {
    console.log("this function is called");
    setText(text.toUpperCase());
    prpos.showalert("changed to uppercase" ,"Success")
  };

  let ChangetoLoCase = () => {
    console.log("this function is called lo");
    setText(text.toLowerCase());
    prpos.showalert("Changed to lowercasse" ,"Success")
  };
  let ClearTextarea = () => {
    setText("");
    prpos.showalert("text is cleared" ,"Success")
  };
  let ChangeSentenceCase = () => {
    let s = text.split(".")[0];
    console.log(s);
    let new_s = s[0].toLowerCase + s.slice(1);
    let new_sen = new_s + text.split(".").slice(1);
    setText(new_sen);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    prpos.showalert("text is speak" ,"Success")
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    prpos.showalert("text is copyed" ,"Success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    prpos.showalert("Extra spaces is removed" ,"Success")
  };
  return (
    <>
      <div style={{ color: prpos.mode === "light" ? "black" : "white" }}>
        <h1>{prpos.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            style={{
              backgroundColor: prpos.mode === "light" ? "white" : "grey",
              color: prpos.mode === "light" ? "black" : "white",
            }}
            onChange={Changetext}
            rows="8"
          ></textarea>
        </div>
        <button onClick={ChangetoUpCase} className="mx-2">
          UpperCase
        </button>
        <button onClick={ChangetoLoCase} className="mx-2">
          LowerCase
        </button>
        <button onClick={ClearTextarea} className="mx-2">
          Clear
        </button>
        <button onClick={ChangeSentenceCase} className="mx-2">
          Sentences Case
        </button>
        <button type="submit" onClick={speak} className=" mx-2 ">
          Speak
        </button>
        <button onClick={handleCopy} className="mx-2">
          copy text
        </button>
        <button onClick={handleExtraSpaces} className="mx-2">
          Remove Extra Spaces
        </button>

        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} word and {text.length} character
          </p>
          <p> {text.split(".").length - 1} number of paragraph </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>
            {text.length > 0 ? text : "Enter something above to preview here"}
          </h3>
        </div>
      </div>
    </>
  );
}
