import React from 'react'
import { useQuery } from '@apollo/client';
import { WARD_QUERY } from '../../queries/muncipal-query';

const WardCompareCard = ({wid})=>{
    const {loading ,error, data} = useQuery(WARD_QUERY,{
        variables:{wid}
    });

    return(
        <div>
            <h1>Ward 1</h1>
            <h1>&nbsp;{wid}</h1>
        </div>
    )
}

export default WardCompareCard;