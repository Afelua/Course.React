import React from "react";
import {Link} from "react-router-dom";
import styles from '../../styles.less';

const logo = require('./images/logo.svg');
const menu = require('./images/menu.svg');
const close = require('./images/close.svg');

function changeNav() {
    const header = document.getElementById('header');
    const headerClassLists = header.classList;
    if(headerClassLists.contains(styles['header_open'])){
        headerClassLists.remove(styles['header_open']);
    } else {
        headerClassLists.add(styles['header_open']);
    }
}

function Header() {
    return <header className={styles.header} id="header">
        <div className={styles.header__container}>
            <Link to="/" className={styles.header__logo}>
                <img src={logo} alt="Hotel Bayview" width="171" className={styles.header__logo}/>
            </Link>
            <nav>
                <img src={menu} width="26" className={styles.header__menu} onClick={() => changeNav()}/>
                <img src={close} width="19" className={styles.header__close} onClick={() => changeNav()}/>
                <ul className={styles.header__navigation}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/room/1">Single Room</Link>
                    </li>
                    <li>
                        <Link to="/">Booking</Link>
                    </li>
                    <li>
                        <Link to="/">Out news</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;
