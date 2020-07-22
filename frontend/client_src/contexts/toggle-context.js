import React, { useReducer } from 'react'
import * as TYPES from '../reducers/action-types'
import { ToggleContext } from '.'


const initialState = {
    toggle_place = false
}

const ToggleContextProvider = (props)=>{
    return(
        <ToggleContext.Provider>
            {props.children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider