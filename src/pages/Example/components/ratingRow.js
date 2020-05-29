import React from 'react'
import FormGroup from "@material-ui/core/FormGroup";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const Rating = ({review, onChange}) => {
    const handleReviews = (event, review) => {
        onChange(review);
    };
    return (
        <FormGroup row>
            <ToggleButtonGroup
                value={review}
                exclusive
                onChange={handleReviews}
            >
                <ToggleButton value="0">0.0</ToggleButton>
                <ToggleButton value="2">2.0</ToggleButton>
                <ToggleButton value="4">4.0</ToggleButton>
                <ToggleButton value="6">6.0</ToggleButton>
                <ToggleButton value="8">8.0</ToggleButton>
                <ToggleButton value="10">10.0</ToggleButton>
            </ToggleButtonGroup>
        </FormGroup>
    );
};

export default Rating;
