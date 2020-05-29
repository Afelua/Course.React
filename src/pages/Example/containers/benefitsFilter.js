import { connect } from 'react-redux'
import { setBenefitsFilter } from '../actions'
import CheckboxRow from '../components/checkboxRow'

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
