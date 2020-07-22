import React, { useContext } from 'react';
import { ToggleContext } from '../../contexts';

const SideBar = () => {
    const togglecontext = useContext(ToggleContext);
    const handleChange = (e)=>{
        togglecontext.togglePlace()
    }
    return (
        <div>
            <input type="checkbox" onChange={handleChange} checked={togglecontext.state.toggle_place} />
            <label htmlFor="scales">Places</label>
        </div>
    )
}

export default SideBar;