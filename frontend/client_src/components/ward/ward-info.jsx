import React from 'react'


const WardInfo = ({ data }) => {
    console.log(data)

    return (
        <div style={{display: "flex"}}>
            <div className="left" style={{margin: "10px"}}>
                <h3>Municipal Name: {data.municipal.properties.name}</h3>
                <h3>Municipal Area: {data.municipal.properties.area}</h3>
                <h4>Ward No : {data.name}</h4>
                <h4>Ward Area : {data.area}</h4>
                <h4>Total Population : {data.total}</h4>
                <h4> Male : {data.male}</h4>
                <h4> Hindu : {data.hindu}</h4>
                <h4> Muslim : {data.muslim}</h4>
                <h4> buddhist : {data.buddhist}</h4>
                <h4> Other : {data.other}</h4>
            </div>
            <div className="right" >
                <h4>Total Building : {data.buildingSet.length}</h4>
                <h4>Total Road : {data.roadSet.length}</h4>
                <h4>Total Telecom Tower : {data.telecomSet.length}</h4>
                <h4>Total Transformer Tower :{data.transformerSet.length}</h4>
            </div>
            <div><h4>Ward Member info</h4></div>
        </div>
    )
}

export default WardInfo;