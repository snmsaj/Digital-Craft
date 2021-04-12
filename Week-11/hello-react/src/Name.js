import React, {Component} from 'react';

class Name extends Component {
    render() {
        return (
            <div>
            <h2>{this.props.lastName}, {this.props.firstName}</h2>
            </div>
        )
    }
}

export default Name