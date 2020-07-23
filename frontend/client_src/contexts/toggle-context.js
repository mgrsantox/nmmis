import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { ToggleContext } from '.'
import toggleReducer from '../reducers/toggle-reducer'


const initialState = {
    toggle_place : false,
    toggle_building:false,
    toggle_road:false,
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
    const toggleRoad= () => {
        dispatch({
            type:TYPES.TOGGLE_ROAD
        })
    };
    return(
        <ToggleContext.Provider value={{state, togglePlace, toggleBuilding, toggleRoad}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider