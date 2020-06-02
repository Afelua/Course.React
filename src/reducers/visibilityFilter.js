import { BenefitsFilters } from '../pages/List/actions'

const INITIAL_REDUCER = {
    benefits: [BenefitsFilters.SHOW_ALL],
    square: {
        from: 0,
        to: 200
    },
    rating: 0,
};

const visibilityFilter = (state = INITIAL_REDUCER, action) => {
    switch (action.type) {
        case 'SET_BENEFITS_FILTER':
            {
                if (state.benefits.includes(action.filter)) {
                    const data = state.benefits.filter(item => item !== action.filter);
                    return {
                        ...state,
                        benefits: data
                    }
                }
                const data = state.benefits.filter(item => item !== BenefitsFilters.SHOW_ALL);
                return {
                    ...state,
                    benefits: [...data, action.filter]
                }
            }
        case 'SET_SQUARE_FILTER_FROM':
            return {
                ...state,
                square: {
                    ...state.square,
                    from: action.from,
                }
            };
        case 'SET_SQUARE_FILTER_TO':
            return {
                ...state,
                square: {
                    ...state.square,
                    to: action.to,
                }
            };
        case 'SET_RATING_FILTER':
            return {
                ...state,
                rating: action.value
            };
        default:
            return state
    }
};

export default visibilityFilter
