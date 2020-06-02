import { connect } from 'react-redux'
import { setRatingFilter } from '../actions'
import RatingRow from '../components/filter/ratingRow'

const mapStateToProps = (state) => ({
    review: state.visibilityFilter.rating,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch(setRatingFilter(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RatingRow)
