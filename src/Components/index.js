import React, { Fragment, Component } from 'react';
import Navbar from './Navbar';
import Questions from './Questions';
import Rating from './Rating';

import './Questionare.css'
import About from './About';

class Questionare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions:props.dataSet,
            currentValue:'job',
            currentIndex:0,
            completedTab:['job'],
            ratingValue:{},
            clickTab:false,
            isModelOpen:false,
            sumRating:0,
            isResult:false,

        };
      }
    
    ratingAdd = (e,index) => {
        if (this.state.ratingValue[this.state.currentValue] === undefined) {
            this.state.ratingValue[this.state.currentValue] = [];
        }
        if(this.state.currentIndex === this.state.questions[this.state.currentValue].length-1 && !this.state.clickTab) {
            this.setState({
                clickTab: true,
                isModelOpen:true
            });
           this.state.ratingValue[this.state.currentValue].push(index);
            //
           
        } else if(this.state.currentIndex < this.state.questions[this.state.currentValue].length-1) {
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                isModelOpen:false
            });
            this.state.ratingValue[this.state.currentValue].push(index);
        }
    }

    tabClick = (tab) => {
        if(!this.state.completedTab.includes(tab) && this.state.clickTab){
            this.setState({
                currentIndex: 0,
                currentValue: tab,
                completedTab: this.state.completedTab.concat([tab]),
                clickTab: false
            })
        }
    }

    closeWindow = () => {
        this.setState({
            isModelOpen:false
        });

    }

    aboutResult = () => {
        this.setState({
            isResult: true
        });
    }
    aboutResultClose = () => {
        this.setState({
            isResult: false,
        });
    }
    render () {
        const rate = this.state.ratingValue[this.state.currentValue] && this.state.ratingValue[this.state.currentValue].reduce((a,b)=> +a + +b,0)/this.state.ratingValue[this.state.currentValue].length;
        return (
            <Fragment>
                {this.state.isModelOpen &&
                    <div class="overlay">
                        <div class="model">
                            <div class="model-content">Average Rating :{rate}</div>
                            <div class="model-content">Choose next Section to Continue</div>
                            <button onClick={this.closeWindow}>Close</button>
                        </div>
                    </div>
                }
                {this.state.isResult ?
                    <About 
                        aboutResultClose={this.aboutResultClose}
                        section={this.state.ratingValue}
                    />
                    :
                    <div class="container">
                        <Navbar aboutResult={this.aboutResult}/>
                        <div class="question-cointainer">
                            <Questions 
                                questionSet={this.state.questions} 
                                currentValue={this.state.currentValue}
                                currentIndex={this.state.currentIndex}
                                completedTab={this.state.completedTab}
                                clickTab={this.state.clickTab}
                                tabClick={this.tabClick}
                            />
                            <Rating
                                ratingAdd={this.ratingAdd}
                                questionSet={this.state.questions}
                                currentValue={this.state.currentValue}
                                currentIndex={this.state.currentIndex}
                            />
                        </div>
                    </div>
                }
            </Fragment>
        );
    }
}

export default Questionare;