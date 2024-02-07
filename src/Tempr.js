import React, { useEffect, useState } from 'react'
import { getWeatherData } from './WeatherApi';
import './style.css'
import Description from './Description';

function Tempr() {
    const [weather, setweather] = useState(null);
    const [unit, setunit] = useState("metric");
    const [city, setcity] = useState("indore");
    const [bgimg,setbgimg] = useState("sunny")

    const changeUnit = (e)=>{
        const button = e.currentTarget;
        console.log(button.innerText);
        unit === "metric" ? setunit("imperial") : setunit("metric");
        button.innerText = unit === "metric" ? "°C" : "°F";
    }
    const changeCity = (e)=>{
        if(e.keyCode === 13){
            setcity(e.currentTarget.value);
            e.currentTarget.value= null;
            e.currentTarget.blur();
        }
    };
    useEffect(() => {
        const fetchdata = async () => {
            const data = await getWeatherData(city,unit);
            setweather(data);
            
            const curTemp = unit === "metric" ? 20 : 60;

            if(data.temp <= curTemp)
                setbgimg("cold");
            else
                setbgimg("sunny");
        };
        fetchdata(); 
    },[unit,city])
    
    return (
        <>
            <div className="main" style={{ backgroundImage: `url(images/${bgimg}.jpg)` }}>
                {
                    weather && (
                        <div className="container">
                            <div className="section searchBar">
                                <input type="search" name="city" id="search" placeholder='Enter the city' onKeyDown={changeCity} />
                                <button onClick={changeUnit}>°F</button>
                            </div>

                            <div className="section temp_section">
                                <div className="w-type_city">
                                    <h3>{weather.name} , {weather.country}</h3>
                                    <img src={weather.iconURL} alt="weartherIcon" />
                                    <h3>{weather.description}</h3>
                                </div>
                                <h1>{weather.temp.toFixed()} °{unit === "metric" ? "C" : "F"}</h1>
                            </div>
                            <Description weather={weather} unit={unit}/>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Tempr