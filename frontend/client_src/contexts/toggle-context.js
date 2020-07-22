import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { ToggleContext } from '.'
import toggleReducer from '../reducers/toggle-reducer'


const initialState = {
    toggle_place : false
}

const ToggleContextProvider = (props)=>{
    const [state, dispatch] = useReducer(toggleReducer, initialState);
    const togglePlace= () => {
        dispatch({
            type:TYPES.TOGGLE_PLACE
        })
    };
    return(
        <ToggleContext.Provider value={{state, togglePlace}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider