import React from 'react';
import {
    ScatterChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    Scatter,
    ResponsiveContainer,
    Cell
} from 'recharts';

const renderTooltip = value => {
    if(value.payload[0]){
        return(
            <div className="tooltip">
                <h2>{value.payload[0].payload.name}</h2>
                <p>
                    <strong>Market Cap: </strong>
                    <span>${value.payload[0].value * 1000000}</span>
                </p>
                <p>
                    <strong>Volume: </strong>
                    <span>${value.payload[1].value * 1000000}</span>
                </p>
                <p>
                    <strong>Price Change: </strong>
                    <span>{value.payload[2].value}%</span>
                </p>
            </div>
        )
    }
    else{
        return ""
    }
}

export default ({ coins }) => {
    const points = coins.map(coin => {
        return {
            market_cap: coin.quote.USD.market_cap / 1000000,
            volume_24h: coin.quote.USD.volume_24h / 1000000,
            percent_change_24h: coin.quote.USD.percent_change_24h,
            name: coin.name,
            fill: `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
        }
    })
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height={600}>
                <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"market_cap"} name="Market Cap" label={{ value: 'Market Cap', position: 'insideBottomRight' }} unit="($M)" />
                    <YAxis dataKey={"volume_24h"} name="Volume" label={{ value: 'Volume', angle: -90, position: 'insideLeft' }} unit="($M)" />
                    <ZAxis dataKey={"percent_change_24h"} range={[0, 800]} name="Price Change" unit="%" />
                    <Tooltip payload={points} content={value => renderTooltip(value)} cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={points}>
                    {points.map((point, index) => <Cell key={`cell-${index}`} fill={point.fill} />)
                    }
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}