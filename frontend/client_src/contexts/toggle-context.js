import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { ToggleContext } from '.'
import toggleReducer from '../reducers/toggle-reducer'


const initialState = {
    toggle_place : false,
    toggle_building:false
}

const ToggleContextProvider = (props)=>{
    const [state, dispatch] = useReducer(toggleReducer, initialState);
    const togglePlace= () => {
        dispatch({
            type:TYPES.TOGGLE_PLACE
        })
    };
    const toggleBuilding= () => {
        dispatch({
            type:TYPES.TOGGLE_BUILDING
        })
    };
    return(
        <ToggleContext.Provider value={{state, togglePlace, toggleBuilding}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider