import * as TYPES from './action-types';

const toggleReducer =(state, action)=>{
    switch (action.type) {
        case TYPES.TOGGLE_PLACE:
            return {
                ...state,
                toggle_place: !state.toggle_place
            };
        case TYPES.TOGGLE_BUILDING:
            return{
                ...state,
                toggle_building: !state.toggle_building
            }
            case TYPES.TOGGLE_ROAD:
                return{
                    ...state,
                    toggle_road: !state.toggle_road
                }
        default:
            return state;
    }

}

export default toggleReducer;