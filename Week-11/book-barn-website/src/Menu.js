import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return(
            <nav>
            <div className="nav-container">
                <h1 className="logo">Reading Rainbow</h1>
                <h2>Home</h2>
                <h2>Categories</h2>
            </div>
            </nav>
        )
    }
}

export default Menu