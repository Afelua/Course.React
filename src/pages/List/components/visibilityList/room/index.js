import React from "react";
import {Link} from "react-router-dom";
import classnames from "classnames";
import styles from '../../../../../styles.less';
const user = require('../../images/icons/user.svg');
const plan = require('../../images/icons/plan.svg');

const RoomCard = (props) =>{
    const nameClassName = `room_${props.name.toLowerCase().split(' ')[0]}`;

    return (
            <Link to={`/room/${props.id}`}  className={classnames(styles.room, styles.room_border)}>
                <div className={classnames(styles.room, styles.room_middle, styles[nameClassName])}>
                    <h4 className={styles.room__title}>{props.name}</h4>
                </div>
                <div className={classnames(styles.room__description, styles.room__description_small)}>
                    <h3 className={styles.room__subtitle}>{props.name}</h3>
                    <ul className={classnames(styles.room__benefits, styles.room__benefits_big)}>
                        <li className={styles.room__benefitItem}>
                            <span className={styles.room__rating}>{props.rating}</span>
                            <span className={styles.room__benefit}>{props.reviews} Reviews</span>
                        </li>
                        <li className={styles.room__benefitItem}>
                            <img src={user} width="17" alt=""
                                 className={styles.room__benefit_user}/>
                            <span className={styles.room__benefit}>{props.guests} guests</span>
                        </li>
                        <li className={styles.room__benefitItem}>
                            <img src={plan} width="16" alt=""
                                 className={styles.room__benefit_square}/>
                            <span className={styles.room__benefit}>{props.square} m²</span>
                        </li>
                    </ul>
                    <p className={classnames(styles.room__text, styles.room__text_list)}>
                        Inspired by&nbsp;a&nbsp;workshop, Atelier rooms
                        are a&nbsp;part of&nbsp;the old town&rsquo;s center.
                    </p>
                    <button className={classnames(styles.button, styles.button_white)}>Book now from 132$</button>
                </div>
            </Link>
    );
};

export default RoomCard;

