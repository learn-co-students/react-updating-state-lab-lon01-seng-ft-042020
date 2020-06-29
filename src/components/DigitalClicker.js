// Code DigitalClicker Component Here
import React, { Component } from 'react'


export default class DigitalClicker extends Component {

    constructor() {
        super()
    
        this.state = {
             timesClicked : 0
        }
    }
    
    clicked = () => {
        this.setState(anteriorState =>{
            return {timesClicked : anteriorState.timesClicked + 1}
        })
    }
    


     


    render() {
        return (
            <button onClick={this.clicked}>
                {this.state.timesClicked}
            </button>
        )
    }
}
