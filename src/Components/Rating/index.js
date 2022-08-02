import React from 'react';

const rateNumber = [1,2,3,4,5,6,7,8,9,10]
const Rating = (props) => {
    return (
        <div class="answer-cointainer">
            {rateNumber.map((index) => {
                return(
                    <div class="width-10">
                        <div class="answers" onClick={(e) => props.ratingAdd(e,index)}><span>{index}</span></div>
                    </div>
                )
            })}
            <div class="comments">
                <div class="comments-left">
                    {props.questionSet[props.currentValue][props.currentIndex].label}
                </div>
                <div class="comments-right">
                    {props.questionSet[props.currentValue][props.currentIndex].label1}
                </div>
            </div>
        </div>
  );
}

export default Rating;
