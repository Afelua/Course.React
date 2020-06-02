import React from 'react'
import classnames from "classnames";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import styles from '../../../../styles.less';

const Rating = ({review, onChange}) => {
    const handleReviews = (event, review) => {
        onChange(review);
    };
    return (
            <div className={classnames(styles.filterItem, styles.filterItem_reviews)}>
                <h2 className={styles.search__title}>Reviews</h2>
                <ToggleButtonGroup
                    value={review}
                    exclusive
                    onChange={handleReviews}
                    className={styles.reviews}
                >
                    <ToggleButton value="0" className={styles.toogle}>
                        <span className={styles.reviews__item}>0.0</span>
                    </ToggleButton>
                    <ToggleButton value="2" className={styles.toogle}>
                        <span className={styles.reviews__item}>2.0</span>
                    </ToggleButton>
                    <ToggleButton value="4" className={styles.toogle}>
                        <span className={styles.reviews__item}>4.0</span>
                    </ToggleButton>
                    <ToggleButton value="6" className={styles.toogle}>
                        <span className={styles.reviews__item}>6.0</span>
                    </ToggleButton>
                    <ToggleButton value="8" className={styles.toogle}>
                        <span className={styles.reviews__item}>8.0</span>
                    </ToggleButton>
                    <ToggleButton value="10" className={styles.toogle}>
                        <span className={styles.reviews__item}>10</span>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
    );
};

export default Rating;
