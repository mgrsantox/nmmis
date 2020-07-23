import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { ToggleContext } from '.'
import toggleReducer from '../reducers/toggle-reducer'


const initialState = {
    toggle_place : false,
    toggle_building:false,
    toggle_road:false,
    toggle_telecom : false,
    toggle_transformer : false,
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
    const toggleTelecom = () => {
        dispatch({
            type:TYPES.TOGGLE_TELECOM
        })
    };
    const toggleTransformer = () => {
        dispatch({
            type:TYPES.TOGGLE_TRANSFORMER
        })
    };
    return(
        <ToggleContext.Provider value={{state, togglePlace, toggleBuilding, toggleRoad, toggleTelecom, toggleTransformer}}>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider