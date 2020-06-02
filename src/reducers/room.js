import {API_CALL_ROOM_REQUEST, API_CALL_ROOM_SUCCESS, API_CALL_ROOM_FAILURE} from '../pages/List/actions';

const room = (state = [], action) => {
    switch (action.type) {
        case API_CALL_ROOM_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_ROOM_SUCCESS:
            return { ...state, fetching: false, room: action.room };
        case API_CALL_ROOM_FAILURE:
            return { ...state, fetching: false, room: null, error: action.error };
        default:
            return state;
    }
};

export default room

