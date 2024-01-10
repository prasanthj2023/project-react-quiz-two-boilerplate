import React from "react";
import "../CSS/Quiz.css";
import Question from "../quizQuestion.json";

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      question: "What temperature does water boil at?",
      optionOne: "50 degrees Celcius",
      optionTwo: "25 degrees Celcius",
      optionThree: "100 degrees Celcius",
      optionFour: "150 degrees Celcius",
    };
  }

  nextBtn = () => {
    if (this.state.questionIndex < 14) {
      this.setState(
        {
          questionIndex: this.state.questionIndex + 1,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  prevBtn = () => {
    if (this.state.questionIndex > 0) {
      this.setState(
        {
          questionIndex: this.state.questionIndex - 1,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  renderQuestions = () => {
    this.setState({
      question: Question[this.state.questionIndex].question,
      optionOne: Question[this.state.questionIndex].optionA,
      optionTwo: Question[this.state.questionIndex].optionB,
      optionThree: Question[this.state.questionIndex].optionC,
      optionFour: Question[this.state.questionIndex].optionD,
    });
  };

  quitBtn = () => {
    if (confirm("Are you sure you want to quit ?")) {
      this.setState(
        {
          questionIndex: 0,
        },
        () => {
          this.renderQuestions();
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="heading-text">Question</h1>
        <div className="number">
          <h4>
            <span>{this.state.questionIndex + 1}</span>of<span> 15</span>
          </h4>
        </div>
        <h2 className="question">{this.state.question}</h2>
        <div className="answers">
          <div className="options">{this.state.optionOne}</div>
          <div className="options">{this.state.optionTwo}</div>
          <div className="options">{this.state.optionThree}</div>
          <div className="options">{this.state.optionFour}</div>
        </div>
        <div className="buttons">
          <div className="previous">
            <button onClick={() => this.prevBtn()}>Previous</button>
          </div>
          <div className="next">
            <button onClick={() => this.nextBtn()}>Next</button>
          </div>
          <div className="quit">
            <button onClick={() => this.quitBtn()}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
