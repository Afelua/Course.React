import React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
import classnames from "classnames";
import styles from '../../../styles.less';

const user = require('./images/icons/user.svg');
const plan = require('./images/icons/plan.svg');
const apartment = require('./images/icons/apartment.svg');
const calendar = require('./images/icons/calendar.svg');
const tv = require('./images/icons/television.svg');
const noSmoking = require('./images/icons/no-smoking.svg');
const summer = require('./images/icons/summer.svg');
const bath = require('./images/icons/bath.svg');
const bicycle = require('./images/icons/bicycle.svg');
const cultery = require('./images/icons/cutlery.svg');
const coctail = require('./images/icons/cocktail.svg');
const towel = require('./images/icons/towel.svg');
const beds = require('./images/icons/beds.svg');

function Room(props) {
    const room = props.room;
    if (!room) {
        return null;
    }
    const nameClassName = `room_${room.name.toLowerCase().split(' ')[0]}`;
    return <main>
        <section className={styles.roomIntro} data-speed="10" data-type="background">
            <h1 className={styles.roomIntro__title}>{room.name}</h1>
            <div className={styles.roomIntro__container}>
                <div className={styles.roomIntro__text}>
                    <ul className={styles.roomIntro__navigation}>
                        <li><a href="">Description</a></li>
                        <li><a href="">Room services</a></li>
                        <li><a href="">Extra services</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Reviews</a></li>
                    </ul>
                    <h4 className={styles.roomIntro__description}>
                        <span className={styles.roomIntro__money}>{room.price}</span>
                        <span className={styles.roomIntro__period}>$/for night</span>
                    </h4>
                </div>
            </div>
        </section>
        <section className={styles.roomPage}>
            <h1 className={styles.roomPage__title}>{room.name}</h1>
            <h2 className={styles.roomPage__subtitle}>Hotel Bayview</h2>
            <div className={styles.roomPage__main}>
                <div className={styles.roomPage__container}>
                    <div className={classnames(styles.room, styles[nameClassName], styles.room_page)}>
                        <div className={styles.roomPage__intro}>
                            <span className={styles.room__rating}>{room.rating}</span>
                            <span className={styles.roomPage__reviews}>{room.reviews} reviews</span>
                        </div>
                    </div>
                    <div className={styles.roomBenefits}>
                <span className={styles.roomBenefit}>
                    <img src={user} alt="" width="29" className={styles.roomBenefit__image}/>
                    <span className={styles.roomBenefit__description}>{room.guests} guests</span>
                </span>
                        <span className={styles.roomBenefit}>
                    <img src={plan} alt="" width="29" className={styles.roomBenefit__image}/>
                    <span className={styles.roomBenefit__description}>{room.square} M2</span>
               </span>
                        <span className={styles.roomBenefit}>
                    <img src={apartment} alt="" width="29" className={styles.roomBenefit__image}/>
                    <span className={styles.roomBenefit__description}>{room.price}$ / for night</span>
               </span>
                        <span className={styles.roomBenefit}>
                    <img src={calendar} alt="" width="31" className={styles.roomBenefit__image}/>
                    <span className={styles.roomBenefit__description}>week price</span>
               </span>
                    </div>
                    <p className={styles.roomDescription}>
                        {room.text}
                    </p>
                    <div className={styles.roomServices}>
                        <h3 className={styles.roomServices__title}>Room Services</h3>
                        <ul className={styles.roomServices__list}>
                            {room.benefits.tv && (<li className={styles.roomService}>
                                <img src={tv} alt="" width="20" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Television</span>
                            </li>)}
                            {room.benefits.noSmoking && (<li className={styles.roomService}>
                                <img src={noSmoking} alt="" width="20" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>No Smoking</span>
                            </li>)}
                            {room.benefits.privateBeach && (<li className={styles.roomService}>
                                <img src={summer} alt="" width="16" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Private Beach</span>
                            </li>)}
                            {room.benefits.bathroom && <li className={styles.roomService}>
                                <img src={bath} alt="" width="19" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Bathroom</span>
                            </li>}
                            {room.benefits.bikeRental && (<li className={styles.roomService}>
                                <img src={bicycle} alt="" width="19" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Bike Rental</span>
                            </li>)}
                            {room.benefits.breakfastIncluded && (<li className={styles.roomService}>
                                <img src={cultery} alt="" width="15" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Breakfast Incl.</span>
                            </li>)}
                            {room.benefits.welcomeDrink && (<li className={styles.roomService}>
                                <img src={coctail} alt="" width="16" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Welcome Drink</span>
                            </li>)}
                            {room.benefits.loundry && (<li className={styles.roomService}>
                                <img src={towel} alt="" width="20" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>Loundry</span>
                            </li>)}
                            {room.benefits.kingBeds && (<li className={styles.roomService}>
                                <img src={beds} alt="" width="19" className={styles.roomService__icon}/>
                                <span className={styles.roomService__description}>King Beds</span>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <form className={styles.roomForm}>
                    <h4 className={styles.roomForm__title}>1 Guest</h4>
                    <div className={styles.roomForm__row}>
                        <div className={styles.roomForm__container}>
                            <span className={styles.roomForm__action}>Check-in</span>
                            <span className={styles.roomForm__date}>26</span>
                            <span className={styles.roomForm__month}>June, 2020</span>
                            <span className={styles.roomForm__weekday}>Monday</span>
                        </div>
                        <div className={styles.roomForm__container}>
                            <span className={styles.roomForm__action}>Check-out</span>
                            <span className={styles.roomForm__date}>28</span>
                            <span className={styles.roomForm__month}>June, 2020</span>
                            <span className={styles.roomForm__weekday}>Wednesday</span>
                        </div>
                    </div>
                    <button className={classnames(styles.button, styles.button_yellow, styles.button_big)}>Book now</button>
                </form>
            </div>
        </section>
    </main>;
}


const mapStateToProps = state => ({
    room: state.room.room
});

export default withRouter(connect(mapStateToProps)(Room));
