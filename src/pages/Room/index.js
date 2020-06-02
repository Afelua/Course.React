import React, {useEffect} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";

import RoomInfo from './roomInfo';

function Room(props) {
    useEffect(() => {
        const id = props.match.params.id;
        props.onRequestRoom(id);
    });
    return <RoomInfo/>
}


const mapDispatchToProps = dispatch => {
    return {
        onRequestRoom: (id) => dispatch({ type: "API_CALL_ROOM_REQUEST", payload: id })
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Room));
