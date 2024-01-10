import React from "react";
import '../CSS/Quiz.css'

class Quiz extends React.Component{

    renderNext = () => {
        if(this.state.questionIndex < 14){
            this.setState({
                questionIndex: this.state.questionIndex + 1
            }, () => {
                this.renderQuestions(); 
            });
        }
    }


    render(){
        return(
            <div className="container">
                <h1 className="heading-text">Question</h1>
                <div className="number">
                    <h4><span>4 </span>of<span> 5</span></h4>
                </div>
                <h2 className="question">The Question fff ff ff df ff</h2>
                <div className="answers">
                    <div className="options">A</div>
                    <div className="options">B</div>
                    <div className="options">C</div>
                    <div className="options">D</div>
                </div>
                <div className="buttons">
                    <div className="previous">
                        <button>Previous</button>
                    </div>
                    <div className="next">
                        <button onClick={() => this.renderNext()}>Next</button>
                    </div>
                    <div className="quit">
                        <button>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;