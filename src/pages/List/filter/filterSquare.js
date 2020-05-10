import React from "react";

import FormGroup from '@material-ui/core/FormGroup';
import TextField from "@material-ui/core/TextField";

function filterSquare(props) {
    const { from, to, handleFrom, handleTo } = props;
    return (<FormGroup row>
            <TextField label="От" value={from} onChange={handleFrom}/>
            <TextField label="До" value={to} onChange={handleTo}/>
        </FormGroup>
    );
}

export default filterSquare;
