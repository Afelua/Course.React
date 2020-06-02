import React from 'react'
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import styles from '../../../../styles.less';

const Square = ({from, to, handleChangeFrom, handleChangeTo}) => {
    const handleChangeFromFilter = (event) => {
        handleChangeFrom(event.target.value);
    };
    const handleChangeToFilter = (event) => {
        handleChangeTo(event.target.value);
    };
    return (
            <div className={classnames(styles.filterItem, styles.filterItem_room)}>
                <h2 className={styles.search__title}>Room Size</h2>
                <div className={styles.size}>
                    <TextField label="От" value={from} onChange={handleChangeFromFilter} className={classnames(styles.size__input, styles.size__input_from)}/>
                    -
                    <TextField label="До" value={to} onChange={handleChangeToFilter}className={classnames(styles.size__input, styles.size__input_to)}/>
                    m <sup>2</sup>
                </div>
            </div>
    );
};

export default Square;
