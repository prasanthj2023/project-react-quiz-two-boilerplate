import React from "react";
import "../CSS/Result.css";

class Result extends React.Component {
  render() {
    return (
      <div className="result-div">
        <h1 className="result-heading">Result</h1>
        <div className="dialogbox">
          <h2>You Need to Practice more!</h2>
          <h1>
            Your score is <span>20%</span>
          </h1>
          <div className="details">
            <div className="noofq">
              <h3>Total Number of Question</h3>
              <p>50</p>
            </div>
            <div className="noofa">
              <h3>Total Number of Attempt</h3>
              <p>50</p>
            </div>
            <div className="noofc">
              <h3>Total Number of Correct answer</h3>
              <p>50</p>
            </div>
            <div className="noofw">
              <h3>Total Number of Wrong answer</h3>
              <p>50</p>
            </div>
          </div>
        </div>
        <div className="two-buttons">
          <button id="play-again">Play Again</button>
          <button id="back-2-home">Back to home</button>
        </div>
      </div>
    );
  }
}

export default Result;
