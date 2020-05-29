import React from 'react'
import Benefits from './filter/benefits';
import Square from '../containers/squareFilter';
import Rating from '../containers/ratingFilter';

import VisibleRoomList from '../containers/visibleRoomList'
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";

const App = () => (
    <>
        <h2>List</h2>
        <Grid
            container
            spacing={1}
        >
            <FormControl>
                <FormGroup column="true">
                    <Benefits />
                    <br/>
                    <Square/>
                    <br/>
                    <Rating/>
                </FormGroup>
            </FormControl>
            <VisibleRoomList />
        </Grid>
    </>
);

export default App
