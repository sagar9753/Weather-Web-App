import React from 'react'
// import { FaArrowDown } from "react-icons/fa";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

function Description({ weather, unit }) {
    const setunit = unit === "metric" ? "°C" : "°F";
    const windunit = unit === "metric" ? "m/s" : "n/h"
    const Api = [
        {
            id: 1,
            icon: <FaArrowDown />,
            data: weather.temp_min.toFixed(),
            unit: setunit,
            type: "min",
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            data: weather.temp_max.toFixed(),
            unit: setunit,
            type: "max",
        },
        {
            id: 3,
            icon: <FaWind />,
            data: weather.speed.toFixed(),
            unit: windunit,
            type: "speed",
        },
        {
            id: 4,
            icon: <BiHappy />,
            data: weather.feels_like.toFixed(),
            unit: setunit,
            type: "feels like",
        },
        {
            id: 5,
            icon: <MdCompress />,
            data: weather.pressure,
            unit: "hPa",
            type: "pressure",
        },
        {
            id: 6,
            icon: <MdOutlineWaterDrop />,
            data: weather.humidity,
            unit: "%",
            type: "humidity",
        },
    ]
    return (
        <>
            <div className="section description">
                {
                    Api.map((ele) => {
                        return (
                            <div className="card">
                                <div className="icon">
                                    {ele.icon}
                                    <span>{ele.type}</span>
                                </div>
                                <h2>{ele.data} {ele.unit}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Description