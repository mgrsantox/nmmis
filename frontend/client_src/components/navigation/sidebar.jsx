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
    return (
        <div>
            <input type="checkbox" onChange={handleChangePlace} checked={togglecontext.state.toggle_place} />
            <label htmlFor="scales">Places</label>
            <br/>
            <input type="checkbox" onChange={handleChangeBuilding} checked={togglecontext.state.toggle_building} />
            <label htmlFor="scales">Building</label>
        </div>
    )
}

export default SideBar;