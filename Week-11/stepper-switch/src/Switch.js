import { Component } from 'react';

class Switch extends Component {
    constructor() {
        super()
        this.state = {
            isOn:false
        }
    }

    handleSwitch = () => {
        this.setState({
            isOn: !this.state.isOn
        })
    }


    render() {
        return (
            <div className="switch">
                <button onClick={this.handleSwitch}>{this.state.isOn ? "ON" : "OFF"}</button>
            </div>
        )
    }
}

export default Switch