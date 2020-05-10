import React from "react";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function filterServices(props) {
    const {services, onChange} = props;
    const handleChange = (event) => {
        onChange({ services: {
                ...services, [event.target.name]: event.target.checked }
            } );
    };

    return (<FormGroup row>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={services.animalAllowed} onChange={handleChange} name="animalAllowed" />}
                    label="Animal allowed"
                />
                <FormControlLabel
                    control={<Checkbox checked={services.smookingRoom} onChange={handleChange} name="smookingRoom" />}
                    label="Smooking Room"
                />
                <FormControlLabel
                    control={<Checkbox checked={services.seaView} onChange={handleChange} name="seaView" />}
                    label="seaView"
                />
            </FormGroup>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={services.swimmingPool} onChange={handleChange} name="swimmingPool" />}
                    label="Swimming pool"
                />
                <FormControlLabel
                    control={<Checkbox checked={services.wiFi} onChange={handleChange} name="wiFi" />}
                    label="Wi Fi 24 H"
                />
                <FormControlLabel
                    control={<Checkbox checked={services.breakfastIncluded} onChange={handleChange} name="breakfastIncluded" />}
                    label="Breakfast Included"
                />
            </FormGroup>
        </FormGroup>
    );
}

export default filterServices;
