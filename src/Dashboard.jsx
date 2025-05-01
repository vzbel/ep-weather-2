import { SunIcon } from '@heroicons/react/24/outline';
import PlaceCard from './PlaceCard';
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import { Link } from 'react-router-dom';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

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
                <div className="flex gap-5 flex-wrap">
                    <PlaceCard 
                    imgURL="https://images.squarespace-cdn.com/content/v1/5894b5efff7c504ed58ffbbb/1630382676436-M30BO4TG89IV5YP513AE/IMG_0639.JPG" 
                    name='Ascarate Park'
                    address='6900 Delta Dr. El Paso Texas 79905'
                    />
                    <PlaceCard 
                    imgURL="https://lh3.googleusercontent.com/p/AF1QipPgc0qhRUAZDEXXxCKWtuq0pwRcQih0HfeB-VZi=s680-w680-h510" 
                    name='Chelitos'
                    address='2400 North Mesa Street, El Paso, TX 79902'
                    />
                    <PlaceCard 
                    imgURL="https://visit-el-paso-2-production.s3.amazonaws.com/places/images/000/000/053/optimized/0.JPG?1495040506" 
                    name='San Jacinto Plaza'
                   address='114 W Mills Ave El Paso, TX 79901'
                    />
                </div>
            </div>
        </main>
        :
        <>Loading...</>
    );
}