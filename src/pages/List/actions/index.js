export const API_CALL_ROOMS_REQUEST = "API_CALL_ROOMS_REQUEST";
export const API_CALL_ROOMS_SUCCESS = "API_CALL_ROOMS_SUCCESS";
export const API_CALL_ROOMS_FAILURE = "API_CALL_ROOMS_FAILURE";

export const API_CALL_ROOM_REQUEST = "API_CALL_ROOM_REQUEST";
export const API_CALL_ROOM_SUCCESS = "API_CALL_ROOM_SUCCESS";
export const API_CALL_ROOM_FAILURE = "API_CALL_ROOM_FAILURE";

export const setBenefitsFilter = filter => ({
    type: 'SET_BENEFITS_FILTER',
    filter
});

export const setSquareFilterFrom = from => ({
    type: 'SET_SQUARE_FILTER_FROM',
    from
});

export const setSquareFilterTo = to => ({
    type: 'SET_SQUARE_FILTER_TO',
    to
});

export const setRatingFilter = value => ({
    type: 'SET_RATING_FILTER',
    value
});


export const BenefitsFilters = {
    SHOW_ALL: 'SHOW_ALL',
    ANIMALS_ALLOWED: 'ANIMAL_ALLOWED',
    SMOOKING_ROOM: 'SMOOKING_ROOM',
    SWIMMING_POOL: 'SWIMMING_POOL',
    WI_FI: 'WI_FI',
    SEA_VIEW: 'SEA_VIEW',
    BREAKFAST_INCLUDED: 'BREAKFAST_INCLUDED'
};
