import { SunIcon } from '@heroicons/react/24/outline';
import PlaceCard from './PlaceCard';
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import { Link } from 'react-router-dom';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// Get data of all places, including name, category, address, description, image, etc. 
import placesData from './Places';

export default function Dashboard(){
    const [weatherData, setWeatherData] = useState(null);
    const [forecastTemps, setForecastTemps] = useState(null);


    useEffect(()=>{
        async function getWeatherData(){
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=El Paso&days=6&aqi=yes&alerts=no`);
            const json = await response.json();
            setWeatherData(json)
            const temp = json.forecast.forecastday.map((day)=>{
                return day.day.avgtemp_f
            });
            setForecastTemps(temp)
        }
        getWeatherData()
    },[])


    weatherData ? console.log(weatherData.forecast.forecastday) : 'lol'

    return (
        weatherData ?
        <main className="px-20 py-40 bg-gray-900 flex-1 text-white">
            <section className="flex flex-wrap mb-24 gap-10">
                <div className="flex-1 flex p-5 py-8 gap-4 bg-gray-800 max-w-lg flex-wrap items-center rounded-xl shadow-sm">
                    <img className="flex-1" src={weatherData.current.condition.icon} alt="" />
                    <div className="flex-1">
                        <div className="flex items-center mb-2">
                            <p className="text-4xl">{weatherData.current.temp_f}&deg;</p>
                            <span className="text-xs text-gray-300">F</span>
                            <p className="ml-3 text-2xl">{weatherData.current.condition.text}</p>
                        </div>
                        <p>{weatherData.location.name}, {weatherData.location.region}</p>
                        <p className="text-gray-400">Wind: {weatherData.current.wind_mph} mph</p>
                        <p className="text-gray-400">Cloud: {weatherData.current.cloud} %</p>
                    </div>
                </div>
                <div >
                    {
                        weatherData ?
                        <LineChart width={340} height={300} data={weatherData.forecast.forecastday} className="bg-gray-900">
                            <Line type="monotone" dataKey="day.avgtemp_f" stroke="#5884d8" />
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis label="Day" />
                            <YAxis label="Temp (F)" dataKey="day.avgtemp_f" domain={[60,80]}/>
                            <Tooltip labelFormatter={(label) => ('Avg. Temp')}/>
                        </LineChart>
                        :
                        <p>Loading forecast...</p>
                    }
                </div>
                <div >
                    {
                        weatherData ?
                        <LineChart width={340} height={300} data={weatherData.forecast.forecastday} className="bg-gray-900">
                            <Line type="monotone" dataKey="day.maxwind_mph" stroke="#4594c8" />
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis label="Day" />
                            <YAxis label="Max Wind (MPH)" dataKey="day.maxwind_mph" domain={[0,40]} />
                            <Tooltip labelFormatter={(label) => ('Avg. Temp')}/>
                        </LineChart>
                        :
                        <p>Loading forecast...</p>
                    }
                </div>
            </section>

            <div>
                <p className="mb-4">Recommended Places</p>
                {/* Map each place to a card  */}
                <div className="flex gap-5 flex-wrap">
                    {
                        placesData.map((place) =>{
                            return (
                                <PlaceCard 
                                imgURL={place.imgURL} 
                                name={place.name}
                                address={place.address}
                                key={place.address}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </main>
        :
        <>Loading...</>
    );
}