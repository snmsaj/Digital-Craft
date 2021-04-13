import { Component } from 'react';

class Stepper extends Component {
    constructor() {
        super()
        this.state = {
            stepper:0
        }
    }

    addStepper = () => {
        this.setState({
            stepper: this.state.stepper + 1
        })
    }

    subtractStepper = () => {
        this.setState({
            stepper: this.state.stepper - 1
        })
    }


    render() {
        return (
            <div className="stepper">
                <button onClick={this.subtractStepper}>-</button>
                <p>{this.state.stepper}</p>
                <button onClick={this.addStepper}>+</button>
            </div>
        )
    }
}

export default Stepper