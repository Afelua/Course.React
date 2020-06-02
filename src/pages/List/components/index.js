import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Square from '../containers/squareFilter';
import Rating from '../containers/ratingFilter';
import VisibleRoomList from '../containers/visibleRoomList'

import Benefits from './filter/benefits';

import styles from '../../../styles.less';

const List = (props) => {
    useEffect(() => {
        props.onRequestRooms();
    });

    return (
            <main>
                <section className={styles.searchIntro} data-speed="10" data-type="background">
                    <h1 className={styles.searchIntro__title}>Search</h1>
                </section>
                <section className={styles.search}>
                    <div>
                        <div className={styles.form}>
                            <h2 className={styles.search__title}>All Branches</h2>
                            <form className={styles.form__container}>
                                <div>
                                    <label htmlFor="checkIn" className={styles.form__label}>Check-in</label>
                                    <div className={styles.form__row}>
                                        <input id="checkIn" className={styles.form__input} placeholder="26"/>
                                        <select className={styles.form__month}>
                                            <option value="June">June</option>
                                        </select>
                                    </div>
                                    <label htmlFor="guests" className={styles.form__label}>Guests</label>
                                    <input id="guests" className={styles.form__input} placeholder="1"/>
                                </div>
                                <div>
                                    <label htmlFor="checkOut" className={styles.form__label}>Check-out</label>
                                    <div className={styles.form__row}>
                                        <input id="checkOut" className={styles.form__input} placeholder="28"/>
                                        <select className={styles.form__month}>
                                            <option value="July">July</option>
                                        </select>
                                    </div>
                                    <label htmlFor="nights" className={styles.form__label}>Nights</label>
                                    <input id="nights" className={styles.form__input} placeholder="2"/>
                                </div>
                            </form>
                        </div>
                        <div className={styles.filter}>
                            <Benefits />
                            <Square/>
                            <Rating/>
                        </div>
                    </div>
                    <VisibleRoomList />
                </section>
            </main>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestRooms: () => dispatch({ type: "API_CALL_ROOMS_REQUEST" })
    };
};

export default connect(null, mapDispatchToProps)(List);
