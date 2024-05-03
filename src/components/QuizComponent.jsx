import React from 'react';

export default class QuizComponent  extends React.Component {
    
    constructor(){
        super()
        this.state = {
            count: 0,
            data: [
                {
                    "question": "Which is the only mammal that can’t jump?",
                    "optionA": "Dog",
                    "optionB": "Elephant",
                    "optionC": "Goat",
                    "optionD": "Lion",
                    "answer": "Elephant"
                }
                ]
        };
    }

    render() {
        const {count,data} = this.state;
        const curQuestion = data[0];
        return (
        <div className ="quiz-container">
            <div className = "box">
            <h1 id='heading'>Question</h1>

            <p id="quesNumber">{count + 1} of 15</p>
            <p id="question">{curQuestion.question}</p>
            
            <div id = "chooseOption">
                <div className = "options">{curQuestion.optionA}</div>
                <div className = "options">{curQuestion.optionB}</div>
                <div className = "options">{curQuestion.optionC}</div>
                <div className = "options">{curQuestion.optionD}</div>
            </div>

            <div className = "NavBtn">
                <div className="nav-btns" id = "prev" >Previous</div>
                <div className="nav-btns" id = "next" >Next</div>
                <div className="nav-btns" id = "quit" >Quit</div>
            </div>
            </div>
            
        </div>
        
        )
    }
    }

