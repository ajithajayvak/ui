import React from "react";

export default function QuestionComponent(props) {
  return (
    <div className="main">
      <p className="qq">{props.question}</p>
      <input
        type="text"
        className="first"
        style={{
          backgroundColor:
            props.value == "yes" ? "rgba(9,131,168,0.68)" : "white",
        }}
        onClick={props.onYesClick}
      />
      <label className="first-label">Yes</label>
      <span className="first-op">A</span>

      <input
        type="text"
        className="second"
        style={{
          backgroundColor:
            props.value == "no" ? "rgba(9,131,168,0.68)" : "white",
        }}
        onClick={props.onNoClick}
      />
      <label className="second-label">No</label>
      <span className="second-op">B</span>
    </div>
  );
}
