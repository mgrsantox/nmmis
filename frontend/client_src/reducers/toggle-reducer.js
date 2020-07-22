import * as TYPES from './action-types';

const toggleReducer =(state, action)=>{
    switch (action.type) {
        case TYPES.TOGGLE_PLACE:
            return {
                ...state,
                toggle_place: !state.toggle_place
            };
    
        default:
            return state;
    }

}

export default toggleReducer;