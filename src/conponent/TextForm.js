import React, { useState } from "react";

export default function TextForm(prpos) {
  const [text, setText] = useState("");
 
  let Changetext = (event) => {
    // console.log("change text function is called");
    setText(event.target.value);
  };
  let ChangetoUpCase = () => {
    // console.log("this function is called");
    setText(text.toUpperCase());
    prpos.showalert("changed to uppercase" ,"Success")
  };

  let ChangetoLoCase = () => {
    // console.log("this function is called lo");
    setText(text.toLowerCase());
    prpos.showalert("Changed to lowercasse" ,"Success")
  };
  let ClearTextarea = () => {
    setText("");
    prpos.showalert("text is cleared" ,"Success")
  };
  let ChangeSentenceCase = () => {
    let s = text.split(".")[0];
    // console.log(s);
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
  
    navigator.clipboard.writeText(text);
 
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
        <h1 className="my-2 " >{prpos.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            style={{
              backgroundColor: prpos.mode === "light" ? "white" : "#152240",
              color: prpos.mode === "light" ? "black" : "white",
            }}
            onChange={Changetext}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} onClick={ChangetoUpCase} className="mx-2 my-2">
          UpperCase
        </button>
        <button disabled={text.length===0} onClick={ChangetoLoCase} className="mx-2 my-2">
          LowerCase
        </button>
        <button disabled={text.length===0} onClick={ClearTextarea} className="mx-2 my-2">
          Clear
        </button>
        <button disabled={text.length===0} onClick={ChangeSentenceCase} className="mx-2 my-2">
          Sentences Case
        </button>
        <button type="submit" disabled={text.length===0} onClick={speak} className=" mx-2 my-2 ">
          Speak
        </button>
        <button disabled={text.length===0} onClick={handleCopy} className="mx-2 my-2">
          copy text
        </button>
        <button disabled={text.length===0} onClick={handleExtraSpaces} className="mx-2 my-2">
          Remove Extra Spaces
        </button>

        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} word and {text.length} character
          </p>
          <p> {text.split(".").length - 1} number of paragraph </p>
          <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
          <h3>
            {text.length > 0 ? text : "Nothing to preview"}
          </h3>
        </div>
      </div>
    </>
  );
}
