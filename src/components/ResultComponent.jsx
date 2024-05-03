import React from 'react';

export default class ResultComponent extends React.Component {
    render() {
        return (
        <div className ="result-container">
            <h1 id="resultHeading">Result</h1>
            <div className='resultbox'>
                <h2 className='resultText'>You need more practice!</h2>
                <h2 id="score"><b>Your score is 20%</b></h2>
                <div className = "info">
                    <div>Total number of questions</div>
                    <div>15</div>
                </div>
                <div className = "info">
                    <div>Number of questions attempted</div>
                    <div>9</div>
                </div>
                <div className = "info">
                    <div>Number of correct answers</div>
                    <div>3</div>
                </div>
                <div className = "info">
                    <div>Number of wrong answers</div>
                    <div>6</div>
                </div>
            </div>
            <div className="PlayBtns">
                <div id = "play-again">Play Again</div>
                <div id = "back-home">Back to Home</div>
            </div>
        </div>
        )
    }
    }
