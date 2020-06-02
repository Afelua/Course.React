import { connect } from 'react-redux'
import { BenefitsFilters } from '../actions';
import VisibilityList from '../components/visibilityList'

const getVisibleRooms = (rooms, filter) => {
    if (!rooms) {
        return null;
    }
    return rooms.filter(room => {
        let show = true;

        if (!filter.benefits.includes(BenefitsFilters.SHOW_ALL)) {
            filter.benefits.map((filterName) => {
                filterName = filterName.toLocaleLowerCase().split('_')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('');

                filterName = filterName.charAt(0).toLowerCase() + filterName.slice(1);
                if(filterName && !room[filterName]){
                    show = false;
                    return false;
                }
            });
        }

        if(room.square < parseFloat(filter.square.from) || room.square > parseFloat(filter.square.to)){
            show = false;
        }

        if (room.reviews < filter.rating){
            return false;
        }

        return show;

    });
};


const mapStateToProps = state => ({
    rooms: getVisibleRooms(state.rooms.rooms, state.visibilityFilter)
});

export default connect(
    mapStateToProps
)(VisibilityList)
