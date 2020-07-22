import * as TYPES from './action-types'

const centerReducer =(state, action)=>{
    switch (action.type) {
        case TYPES.SET_CENTER:
            return {
                ...state,
                center: action.payload
            };
    
        default:
            return state;
    }

}

export default centerReducer;