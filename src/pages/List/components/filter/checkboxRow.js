import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styles from '../../../../styles.less';

const CheckboxRow = ({ active, children, handleChange }) => {
    return (
        <div className={styles.services__item}>
            <FormControlLabel
                control={<Checkbox checked={active} onChange={handleChange} name={children} checkedIcon={<span className={styles.checkboxIcon} />}
                />}
                label={children}
            />
        </div>
    );
};

export default CheckboxRow


