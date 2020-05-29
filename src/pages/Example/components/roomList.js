import React from 'react'
import Room from './room'
import Grid from "@material-ui/core/Grid";

const RoomList = ({ rooms }) =>
    <Grid container item xs={8}>
                    {rooms.map(room =>
                        <Room
                            key={room.id}
                            {...room}
                        />
                    )}
    </Grid>;


export default RoomList
