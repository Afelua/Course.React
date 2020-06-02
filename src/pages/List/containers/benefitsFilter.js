import { connect } from 'react-redux'
import CheckboxRow from '../components/filter/checkboxRow'
import { setBenefitsFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    active: state.visibilityFilter.benefits.includes(ownProps.filter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
        handleChange: () => dispatch(setBenefitsFilter(ownProps.filter))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxRow)
