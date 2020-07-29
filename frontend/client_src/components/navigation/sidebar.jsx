import React, { useContext } from 'react';
import { ToggleContext } from '../../contexts';
import { Link } from 'react-router-dom';

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
    const handleChangeTelecom = (e)=>{
        togglecontext.toggleTelecom()
    }
    const handleChangeTrasformer = (e)=>{
        togglecontext.toggleTransformer()
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
            <br/>
            <input type="checkbox" onChange={handleChangeTelecom} checked={togglecontext.state.toggle_telecom} />
            <label htmlFor="scales">Telecom</label>
            <br/>
            <input type="checkbox" onChange={handleChangeTrasformer} checked={togglecontext.state.toggle_transformer} />
            <label htmlFor="scales">Trasnformer</label>
            <br/>
            <Link to="/ward-compare"> Compare</Link>
        </div>
    )
}

export default SideBar;