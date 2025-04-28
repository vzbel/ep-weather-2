import { SunIcon } from '@heroicons/react/24/outline';
import PlaceCard from './PlaceCard';
import { useEffect, useState } from 'react';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default function Dashboard(){
    const [weatherData, setWeatherData] = useState(null);

    useEffect(()=>{
        async function getWeatherData(){
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=El Paso&days=6&aqi=yes&alerts=no`);
            const json = await response.json();
            // console.log(json)
            setWeatherData(json)
        }
        getWeatherData()
    },[])


    return (
        weatherData ?
        <main className="px-20 py-40 bg-gray-900 flex-1 text-white">
            <div className="flex p-5 py-8 gap-4 bg-gray-800 max-w-lg flex-wrap items-center rounded-xl mb-24 shadow-sm">
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

            <div>
                <p className="mb-4">Recommended Places</p>
                <div className="flex gap-5 flex-wrap">
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                    <PlaceCard />
                </div>
            </div>
        </main>
        :
        <>Loading...</>
    );
}