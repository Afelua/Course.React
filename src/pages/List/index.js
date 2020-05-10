import React from "react";

import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FilterServices from './filter/filterServices';
import FilterSquare from './filter/filterSquare';
import FilterReviews from './filter/filterReviews';
import RoomCard from './room-card';

import { rooms } from './constants';

function List() {
    const [state, setServices] = React.useState({
        services : {
            animalAllowed: false,
            smookingRoom: false,
            swimmingPool: false,
            wiFi: false,
            seaView: false,
            breakfastIncluded: false
        }
    });

    const [review, setReview] = React.useState("0");
    const [from, setFrom] = React.useState("0");
    const [to, setTo] = React.useState("100");

    const handleReviews = (event, review) => {
        setReview(review);
    };

    const handleFrom = (event) => {
        const value = event.target.value;
        setFrom(value);
    };

    const handleTo = (event) => {
        const value = event.target.value;
        setTo(value);
    };

    const filter = () => rooms.filter(room => {
        let show = true;
        Object.keys(state.services).map((key) => {
            if(state.services[key] && !room[key]){
                show = false;
                return false;
            }
        });
        if (room.reviews < review){
            return false;
        }
        if(room.square < parseFloat(from) || room.square > parseFloat(to)){
            return false;
        }
        return show;
    });

    const roomsFilter = filter();
    return (<>
        <h2>List</h2>
        <Grid
            container
            spacing={1}
        >
            <FormControl>
                <FormGroup column="true">
                    <FilterServices services={state.services} onChange={setServices}/>
                    <br/>
                    <FilterSquare from={from} to={to} handleFrom={handleFrom} handleTo={handleTo}/>
                    <br/><br/>
                    <FilterReviews review={review} onChange={handleReviews}/>
                </FormGroup>
            </FormControl>
            <Grid container item xs={8}>
                {roomsFilter.map((item, index) => <RoomCard card={item} key={index}/>)}
            </Grid>
        </Grid>
    </>);
}

export default List;
