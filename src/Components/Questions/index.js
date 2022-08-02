import React from 'react';

const Questions = (props) => {
    var question= props.questionSet[props.currentValue];
    return (
            <div className="questions-section">
                <div className="questions-part">
                    <div>
                        <h1 className="number-big">{props.currentIndex+1}</h1>
                        <span className="number-small">of {question.length}</span>
                    </div>
                    <div className="question">
                        <span>{question[props.currentIndex].question}</span>
                    </div>
                </div>

                <div className="nav-bar">
                    {props.questionSet && Object.keys(props.questionSet).map((item) => {
                        return(
                            <span className={`${props.completedTab.includes(item) ? "active":'' }`} onClick={() => props.tabClick(item)}>{item}</span>
                        )
                    })}
                </div>
            </div>
    );
}

export default Questions;
