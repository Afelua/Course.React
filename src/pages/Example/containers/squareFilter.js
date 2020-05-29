import { connect } from 'react-redux'
import { setSquareFilterFrom, setSquareFilterTo } from '../actions'
import SquareRow from '../components/squareRow'

const mapStateToProps = (state) => ({
        from: state.visibilityFilter.square.from,
        to: state.visibilityFilter.square.to
    });

const mapDispatchToProps = (dispatch) => ({
        handleChangeFrom: (value) => dispatch(setSquareFilterFrom(value)),
        handleChangeTo: (value) => dispatch(setSquareFilterTo(value))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SquareRow)
