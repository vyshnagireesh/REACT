import React, { Component } from 'react'

export default class Counter extends Component {
    // step1. initialization state
    constructor(props) {  //accept props as a parameter
        super(props); //used ti invoke parent component
        this.state = { count: 0 };
    }

    //step2 defined methods to modify state
    Increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

//step3  render ui
    render() {
        return (
            <div>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.Increment}>+</button>
                                <button onClick={this.decrement}>-</button>


            </div>
        )
    }
}
