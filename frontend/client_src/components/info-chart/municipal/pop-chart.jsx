import React from 'react';
import { Chart } from "react-google-charts";

const MunPopChart = ({ mundata }) => {
    console.log(mundata.male)
    return (
        <div style={{ display: 'flex', maxWidth: 900 }}>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Total', 'Male', 'Female'],
                    [mundata.total, mundata.male, mundata.female],
                ]}
                options={{
                    // Material design options
                    chart: {
                        title: 'By Sex',
                        subtitle: 'some description',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
            />

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Ethnic', 'total'],
                    ['Hindu', mundata.hindu],
                    ['Muslim', mundata.muslim],
                    ['Buddhist', mundata.buddhist],
                    ['Other', mundata.other],
                ]}
                options={{
                    title: 'By Ethnic',
                    // Just add this option
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default MunPopChart;