// import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
import './App.css';
import Menu from './Menu'

function BaseLayout(props) {

        return(
            <div>
                <Menu />
                {props.children}
                <Footer />
            </div>
        )

}

// export function Menu() {
//     return (
//         <nav>
//         <div className="nav-container">
//             <h1 className="logo">Reading Rainbow</h1>
//             <NavLink to="/"><div className="menu-option">Home</div></NavLink>
//             <NavLink to="/books"><div className="menu-option">Books</div></NavLink>
//             <NavLink to="/addBooks"><div className="menu-option">Add Book</div></NavLink>
//         </div>
//         </nav>
//     )
// }

export function Footer() {
    return(
        <div className="footer">
            <p>©Copyright</p>
        </div>
    )
}

