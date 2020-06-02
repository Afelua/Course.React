import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import styles from '../../styles.less';

const img1 = require('./images/benefits/main1.png');
const img2 = require('./images/benefits/main2.png');
const img3 = require('./images/benefits/main3.png');
const benefit1 = require('./images/benefits/benefit1.png');
const benefit2 = require('./images/benefits/benefit2.png');
const benefit3 = require('./images/benefits/benefit3.png');
const benefit4 = require('./images/main/benefit4.png');
const user = require('./images/icons/user.svg');
const plan = require('./images/icons/plan.svg');

function Main() {
    return (<main>
        <section className={styles.intro} data-speed="10" data-type="background">
            <h3 className={styles.subtitle}>Luxury hotel &amp;&nbsp;best resort</h3>
            <h1 className={styles.intro__title}>Enjoy a&nbsp;luxury experience</h1>
            <Link to="/list" className={styles.button}>Rooms &amp;&nbsp;Suites</Link>
            <form className={styles.intro__form}>
                <div className={classnames(styles.intro__input, styles.intro__input_first)}>
                    <span className={styles.intro__text}>Check-in</span>
                    <div className={styles.intro__container}>
                        <input type="text" className={styles.intro__date}/>
                        <select className={styles.intro__month}>
                            <option value="June">June</option>
                        </select>
                    </div>
                </div>
                <div className={classnames(styles.intro__input, styles.intro__input_second)}>
                    <span className={styles.intro__text}>Check-out</span>
                    <div className={styles.intro__container}>
                        <input type="text" className={styles.intro__date}/>
                        <select className={styles.intro__month}>
                            <option value="June">June</option>
                        </select>
                    </div>
                </div>
                <div className={classnames(styles.intro__input, styles.intro__input_third)}>
                    <span className={styles.intro__text}>Guests</span>
                    <div className={styles.intro__container}>
                        <input type="text" className={styles.intro__date}/>
                    </div>
                </div>
                <Link to="/list" className={styles.intro__button}>Check availability</Link>
            </form>
        </section>
        <section className={styles.about}>
            <div className={styles.about__container}>
                <h3 className={styles.subtitle}>Hotel Bayview</h3>
                <h2 className={styles.about__title}>Pearl of&nbsp;the Adriatic</h2>
                <p className={styles.about__text}>
                    Hotel Bayview is&nbsp;a&nbsp;luxurious boutique hotel located in&nbsp;the heart
                    of&nbsp;Rovinj&rsquo;s lively Old town. Offering views of&nbsp;the harbor, St. Catherine&rsquo;s
                    Island or&nbsp;the Main Square, each suite is&nbsp;fitted with design furniture and local art.
                    Guests can relax at&nbsp;2&nbsp;on-site bars and a&nbsp;brasserie style restaurant.
                </p>
                <button className={classnames(styles.button, styles.button_yellow)}>
                    About&nbsp;us
                </button>
            </div>
            <div className={styles.about__images}>
                <img src={img1} alt="" className={styles.about__img1}/>
                <img src={img2} alt="" className={styles.about__img2}/>
                <img src={img3} alt="" className={styles.about__img3}/>
            </div>
        </section>
        <section className={styles.rooms__container}>
            <div className={styles.rooms}>
                <div className={styles.rooms__titleContainer}>
                    <h3 className={styles.subtitle}>Hotel Bayview</h3>
                    <hr className={styles.rooms__hr}/>
                    <h2 className={styles.rooms__title}>Best Rooms</h2>
                </div>
                <div className={styles.rooms_list}>
                    <ul>
                        <li className={styles.roomBig}>
                            <Link to="/room/1" className={styles.roomBig__link}>
                                <div className={classnames(styles.room, styles.room_big, styles.room_adriatic)}>
                                    <h4 className={styles.room__title}>Adriatic Suite</h4>
                                </div>
                                <div className={classnames(styles.room__description, styles.room__description_big)}>
                                    <h5 className={styles.room__subtitle}>Adriatic Suite</h5>
                                    <ul className={classnames(styles.room__benefits, styles.room__benefits_small)}>
                                        <li className={styles.room__benefitItem}>
                                            <span className={styles.room__rating}>7.5</span>
                                            <span className={styles.room__benefit}>5 Reviews</span>
                                        </li>
                                        <li className={styles.room__benefitItem}>
                                            <img src={user} width="17" alt=""
                                                 className={styles.room__benefit_user}/>
                                            <span className={styles.room__benefit}>3 guests</span>
                                        </li>
                                        <li className={styles.room__benefitItem}>
                                            <img src={plan} width="16" alt=""
                                                 className={styles.room__benefit_square}/>
                                            <span className={styles.room__benefit}>57 m²</span>
                                        </li>
                                    </ul>
                                    <p className={classnames(styles.room__text, styles.room__text_main)}>
                                        Offering 2&nbsp;balconies and views of&nbsp;Rovinj&rsquo;s Main Square and
                                        the lively waterfront and the main promenade.
                                    </p>
                                    <button className={classnames(styles.button, styles.button_black)}>Book now from 300$</button>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.room__container}>
                        <ul>
                            <li className={classnames(styles.room, styles.room_small, styles.room_atelier)}>
                                <Link to="/room/2" className={styles.room_link}>
                                    <h4 className={styles.room__title}>Atelier</h4>
                                </Link>
                            </li>
                            <li className={classnames(styles.room, styles.room_small, styles.room_gallery)}>
                                <Link to="/room/3" className={styles.room_link}>
                                    <h4 className={styles.room__title}>Gallery</h4>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={classnames(styles.room, styles.room_small, styles.room_piazza)}>
                                <Link to="/room/4" className={styles.room_link}>
                                    <h4 className={styles.room__title}>Piazza</h4>
                                </Link>
                            </li>
                            <li className={classnames(styles.room, styles.room_small, styles.room_grand_piazza)}>
                                <Link to="/room/5" className={styles.room_link}>
                                    <h4 className={styles.room__title}>Grand Piazza Suite</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.benefits}>
            <div className={styles.benefits__container}>
                <div className={styles.benefits__images}>
                    <div>
                        <img src={benefit1} alt="" className={styles.benefits_image}/>
                        <img src={benefit3} alt="" className={styles.benefits_image}/>
                    </div>
                    <div>
                        <img src={benefit2} alt="" className={styles.benefits_image}/>
                        <img src={benefit4} alt="" className={styles.benefits_image}/>
                    </div>
                </div>
                <div className={styles.benefit}>
                    <h3 className={classnames(styles.subtitle, styles.subtitle_white)}>Luxury hotel &amp;&nbsp;best resort</h3>
                    <h2 className={styles.benefits__title}>Pearl of&nbsp;the<span className={styles.title_yellow}> Adriatic</span></h2>
                    <p className={styles.benefit__text}>
                        Decorated with original art works by&nbsp;contemporary artists, all suites are air-conditioned
                        and consist of&nbsp;a&nbsp;SMART&nbsp;TV, mini-bar and coffee/tea making facilities.
                        <br/>
                            Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna&nbsp;et.
                            Quisque
                            euismod orci ut&nbsp;et&nbsp;lobortis. Blandit vel sapien vitae, condimentum ultricies magna
                            et&nbsp;orci ut&nbsp;et&nbsp;lobortis, Phasellus enim
                    </p>
                    <button className={classnames(styles.button, styles.button_black)}>
                        Check all packages
                    </button>
                </div>
            </div>
        </section>
        <section className={styles.shortInfo}>
            <h5>
                The closest rocky public beach is&nbsp;a&nbsp;15-minute walk away. <br/>
                Pula Airport is&nbsp;at&nbsp;a&nbsp;distance of&nbsp;25&nbsp;mi away. <br/>
                Free private parking is&nbsp;available outside the pedestrian zone.
            </h5>
        </section>
    </main>
);
}

export default Main;
