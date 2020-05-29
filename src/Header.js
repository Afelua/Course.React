import React from "react";
import {Link} from "react-router-dom";
import styles from './styles.less';

function Header() {
    return <nav>
        <ul className={styles.menu}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
            <li>
                <Link to="/room">Room</Link>
            </li>
            <li>
                <Link to="/example">Example</Link>
            </li>
        </ul>
    </nav>;
}

export default Header;
