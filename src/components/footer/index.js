import React from "react";
import {Link} from "react-router-dom";
import styles from '../../styles.less';

function Footer() {
    return <footer className={styles.footer}>
        <ul className={styles.footer__menu}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </footer>
}

export default Footer;
