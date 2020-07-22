import * as TYPES from './action-types'

const zoomReducer =(state, action)=>{
    switch (action.type) {
        case TYPES.ON_ZOOMED:
            return {
                ...state,
                zoom: action.payload
            };
    
        default:
            return state;
    }

}

export default zoomReducer;