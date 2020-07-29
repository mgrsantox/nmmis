import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { WARD_QUERY } from '../../queries/muncipal-query';

const WardCompareCard = ({wid})=>{
    const [ward, setWard] = useState({})
    const [wardCrd, setWardCrd] = useState([])
    const {loading ,error, data} = useQuery(WARD_QUERY,{
        variables:{wid}
    });
    useEffect(()=>{
        if (!loading) {
            setWardCrd(data.ward.geometry.coordinates)
            setWard(data.ward.properties)
            console.log(data.ward)
        }
    });
    return ward.municipal!==undefined? (
        <div>
            <h1>Ward 1</h1>
            <h1>&nbsp;{ward.municipal.properties.name}</h1>
            <h1>&nbsp;{ward.name}</h1>
        </div>
    ):null
}

export default WardCompareCard;