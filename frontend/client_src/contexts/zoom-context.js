import React, { useReducer } from 'react'
import { ZoomContext } from '.';
import zoomReducer from '../reducers/zoom-reducer'
import * as TYPES from '../reducers/action-types'


const initialState = {
    zoom: 11
};
const ZoomContextProvider = (props)=>{
    const [state, dispatch] = useReducer(zoomReducer, initialState);
    const onZoom= (zoom) => {
        dispatch({
            type:TYPES.ON_ZOOMED,
            payload:zoom
        })
    };
    return(
        <ZoomContext.Provider  value={{state, onZoom}}>
            {props.children}
        </ZoomContext.Provider>
    )
}

export default ZoomContextProvider;