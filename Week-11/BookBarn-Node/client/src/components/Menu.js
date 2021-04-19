import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <nav>
        <div className="nav-container">
            <h1 className="logo">Reading Rainbow</h1>
            <NavLink to="/"><div className="menu-option">Home</div></NavLink>
            <NavLink to="/books"><div className="menu-option">Books</div></NavLink>
            <NavLink to="/addBooks"><div className="menu-option">Add Book</div></NavLink>
        </div>
        </nav>
    )
}

export default Menu