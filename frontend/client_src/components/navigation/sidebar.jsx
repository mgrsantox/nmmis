import React, { useContext } from 'react';
import { ToggleContext } from '../../contexts';

const SideBar = () => {
    const togglecontext = useContext(ToggleContext);
    console.log('dsa'+togglecontext);
    const handleChange = (e)=>{
        console.log(e)
    }
    return (
        <div>
            <input type="checkbox" onChange={handleChange} name="scales" checked />
            <label htmlFor="scales">Places</label>
        </div>
    )
}

export default SideBar;