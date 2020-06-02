import {API_CALL_ROOMS_REQUEST, API_CALL_ROOMS_SUCCESS, API_CALL_ROOMS_FAILURE} from '../pages/List/actions';

const rooms = (state = [], action) => {
    switch (action.type) {
        case API_CALL_ROOMS_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_ROOMS_SUCCESS:
            return { ...state, fetching: false, rooms: action.rooms };
        case API_CALL_ROOMS_FAILURE:
            return { ...state, fetching: false, rooms: null, error: action.error };
        default:
            return state;
    }
};

export default rooms

