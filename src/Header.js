import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
            <li>
                <Link to="/room">Room</Link>
            </li>
        </ul>
    </nav>;
}

export default Header;