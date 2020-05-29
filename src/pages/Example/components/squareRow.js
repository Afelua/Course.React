import React from 'react'
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

const Square = ({from, to, handleChangeFrom, handleChangeTo}) => {
    const handleChangeFromFilter = (event) => {
        handleChangeFrom(event.target.value);
    };
    const handleChangeToFilter = (event) => {
        handleChangeTo(event.target.value);
    };
    return (
        <FormGroup row>
            <TextField label="От" value={from} onChange={handleChangeFromFilter}/>
            <TextField label="До" value={to} onChange={handleChangeToFilter}/>
        </FormGroup>
    );
};

export default Square;
