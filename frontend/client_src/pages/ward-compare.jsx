import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { SHORT_WARDS_QUERY } from '../queries/muncipal-query';
import WardCompareCard from '../components/ward/ward-compare-card';

const mid = 'iaEL7GVAzOtRL';

const WardCompare = () => {
    const [wards, setWards] = useState([]);
    const [ward1, setWard1] = useState('')
    const [ward2, setWard2] = useState('')

    const { loading, error, data } = useQuery(SHORT_WARDS_QUERY, {
        variables: { mid }
    });
    useEffect(() => {
        if (!loading && typeof data.wards !== undefined) {
            setWards(data.wards);
        }
    });

    const handleWard1Change = (e) => {
        setWard1(e.target.value)
    }
    const handleWard2Change = (e) => {
        setWard2(e.target.value)
    }
    return (
        <div>
            Compare page
            <div style={{ display: "flex" }}>
                <div className="ward1">
                    <label htmlFor="ward1">Choose a First Ward:</label>
                    <select name="ward1" defaultValue={'DEFAULT'} onChange={e => handleWard1Change(e)}>
                        <option value="DEFAULT" disabled>Choose...</option>
                        {
                            wards.map(ward => {
                                return (
                                    <option key={ward.id} value={ward.id}>{ward.properties.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="ward2">
                    <label htmlFor="ward2">Choose a Second Ward:</label>
                    <select name="ward2" defaultValue={'DEFAULT'} onChange={e => handleWard2Change(e)}>
                        <option value="DEFAULT" disabled>Choose...</option>
                        {
                            wards.map(ward => {
                                return (
                                    <option key={ward.id} value={ward.id}>{ward.properties.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            {ward1!==''&&ward2!==''?
                <div style={{ display: "flex", margin: "10px" }}>
                    <div>
                        <WardCompareCard wid={ward1} />
                    </div>
                    <div>
                        <WardCompareCard wid={ward2} />
                    </div>
                </div>
                :null
            }

        </div>
    )
}

export default WardCompare;