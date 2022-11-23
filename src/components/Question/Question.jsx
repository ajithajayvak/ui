import React, { useState } from "react";
import "./Question.css";
import logo from "../../images/logo.png";
import QuestionComponent from "../QuestionComponent";
const Question = () => {
  const colors = "colors";
  const nocolors = "nocolor";
  const [yescolor, setYescolor] = useState();
  const [nocolor, setNocolor] = useState();
  const yesClicked = () => {
    setYescolor(colors);
    setNocolor(nocolors);
    console.log("clicked");
  };
  const noClicked = () => {
    setNocolor(colors);
    setYescolor(nocolors);
    console.log("clicked no");
  };

  const [areYouFine, setAreYouFine] = useState();
  const [receiveArefund, setReceiveFund] = useState();
  return (
    <div className="App colos">
      <div className="logo" style={{ marginBottom: 50 }}>
        <img className="logos" src={logo}></img>
      </div>
      <QuestionComponent
        question={"Have you previously looked into PPI?"}
        value={areYouFine}
        onYesClick={() => {
          setAreYouFine("yes");
        }}
        onNoClick={() => {
          setAreYouFine("no");
        }}
      />
      <QuestionComponent
        question={"Did you receive a refund?"}
        value={receiveArefund}
        onYesClick={() => {
          setReceiveFund("yes");
        }}
        onNoClick={() => {
          setReceiveFund("no");
        }}
      />
      <QuestionComponent
        question={"Did you receive a refund?"}
        value={receiveArefund}
        onYesClick={() => {
          setReceiveFund("yes");
        }}
        onNoClick={() => {
          setReceiveFund("no");
        }}
      />
      <QuestionComponent
        question={"Did you receive a refund?"}
        value={receiveArefund}
        onYesClick={() => {
          setReceiveFund("yes");
        }}
        onNoClick={() => {
          setReceiveFund("no");
        }}
      />
      {/* <QuestionComponent
        question={"Was the refund in question received prior to 2017?"}
        value={isThatTrue}
        onYesClick={() => {
          setIsThatTrue("yes");
        }}
        onNoClick={() => {
          setIsThatTrue("no");
        }}
      /> */}
      {/* <div className="main">
        <p className="qq">Have you previously looked into PPI?</p>
        <input
          type="text"
          className="first"
          id={yescolor}
          onClick={yesClicked}
        />
        <label className="first-label">Yes</label>
        <span className="first-op">A</span>

        <input
          type="text"
          className="second"
          id={nocolor}
          onClick={noClicked}
        />
        <label className="second-label">No</label>
        <span className="second-op">B</span>
      </div> */}
    </div>
  );
};

export default Question;
