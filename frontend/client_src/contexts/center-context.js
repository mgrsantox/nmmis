import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { CenterContext } from '.';
import centerReducer from '../reducers/center-reducer'


const initialState = {
    center: [28.5205894108141, 81.09798431396484]
};
const CenterContextProvider = (props)=>{
    const [state, dispatch] = useReducer(centerReducer, initialState);
    const setCenter= (center) => {
        dispatch({
            type:TYPES.SET_CENTER,
            payload:center
        })
    };
    return(
        <CenterContext.Provider  value={{state, setCenter}}>
            {props.children}
        </CenterContext.Provider>
    )
}

export default CenterContextProvider;