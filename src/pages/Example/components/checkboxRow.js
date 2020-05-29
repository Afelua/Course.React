import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxRow = ({ active, children, handleChange }) => {
    return (
        <FormControlLabel
            control={<Checkbox checked={active} onChange={handleChange} name={children} />}
            label={children}
        />
    );
};

export default CheckboxRow


