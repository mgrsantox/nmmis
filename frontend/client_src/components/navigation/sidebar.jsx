import React, { useContext } from 'react';
import { ToggleContext } from '../../contexts';

const SideBar = () => {
    const togglecontext = useContext(ToggleContext);
    const handleChangePlace = (e)=>{
        togglecontext.togglePlace()
    }
    const handleChangeBuilding = (e)=>{
        togglecontext.toggleBuilding()
    }
    const handleChangeRoad = (e)=>{
        togglecontext.toggleRoad()
    }
    return (
        <div>
            <input type="checkbox" onChange={handleChangePlace} checked={togglecontext.state.toggle_place} />
            <label htmlFor="scales">Places</label>
            <br/>
            <input type="checkbox" onChange={handleChangeBuilding} checked={togglecontext.state.toggle_building} />
            <label htmlFor="scales">Building</label>
            <br/>
            <input type="checkbox" onChange={handleChangeRoad} checked={togglecontext.state.toggle_road} />
            <label htmlFor="scales">Road</label>
        </div>
    )
}

export default SideBar;