import React from 'react'
import Room from './room'
import styles from '../../../../styles.less';

const VisibilityList = ({ rooms }) => {
    if (!rooms){
        return null;
    }
    return (
        <div className={styles.search__right}>
            <h2 className={styles.search__title}>List</h2>
            <div className={styles.search__container}>
                {rooms.map(room =>
                        <Room
                            key={room.id}
                            {...room}
                        />
                    )}
            </div>
        </div>
        )
};

export default VisibilityList
