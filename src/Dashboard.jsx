import { SunIcon } from '@heroicons/react/24/outline';
import PlaceCard from './PlaceCard';
import { useEffect, useState } from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import { Link } from 'react-router-dom';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// Get data of all places, including name, category, address, description, image, etc. 
import placesData from './Places';

// Filtered places data
export let filteredPlaces = null;

export default function Dashboard(){
    // Data for El Paso's weather today
    const [weatherData, setWeatherData] = useState(null);

    // List of forecast temperatures
    const [forecastTemps, setForecastTemps] = useState(null);


    // Retrieve weather data for El Paso, TX using weather API
    useEffect(()=>{
        async function getWeatherData(){
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=El Paso&days=6&aqi=yes&alerts=no`);
            const json = await response.json();
            setWeatherData(json)

            // List of temperatures forecasted for the next 2 days 
            const temp = json.forecast.forecastday.map((day)=>{
                return day.day.avgtemp_f
            });
            setForecastTemps(temp)
        }
        getWeatherData()
    },[])


    // Filter places based on today's temperature
    // tempRange is a list of the form [r1, r2], where r1 
    // is the start of the range and r2 is the end of the range
    filteredPlaces = weatherData ? 
        // Make sure the place's temp is in the range, inclusive
        placesData.filter((place) => {
            let range = place.tempRange
            // console.log(place.tempRange)
            return ((place.tempRange[0] <= weatherData.current.temp_f) && (weatherData.current.temp_f <= place.tempRange[1]));
        }) 
        : 
        null;

    return (
        weatherData ?
        <main className="px-20 py-40 flex-1 text-black">
            <section className="flex flex-wrap mb-24 gap-10">
                
                {/* Card showing today's weather */}
                <div className="flex-1 flex p-5 py-8 gap-4 max-w-lg flex-wrap items-center rounded-xl shadow-sm">
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
                    {/* Graph showing average forecast temperatures */}
                    {
                        weatherData ?
                        <LineChart width={340} height={300} data={weatherData.forecast.forecastday} className="shadow-sm">
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
                    {/* Chart showing wind in MPH across next 2 days */}
                    {
                        weatherData ?
                        <LineChart width={340} height={300} data={weatherData.forecast.forecastday} className="shadow-sm">
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
                {/* A section showing the places recommended to the user based on today's temperature */}
                <p className="mb-4">Recommended Places</p>
                {/* Map each place to a card  */}
                <div className="flex gap-5 flex-wrap justify-between">
                    {
                        filteredPlaces ? 
                        filteredPlaces.map((place) =>{
                            return (
                                <Link to={`/places/${place.id}`} className="flex" key={place.id}>
                                    <PlaceCard 
                                    imgURL={place.imgURL} 
                                    name={place.name}
                                    address={place.address}
                                    description={place.description}
                                    id={place.id}
                                    />
                                </Link>
                            );
                        })
                        :
                        <></>
                    }
                </div>
            </div>
        </main>
        :
        <>Loading...</>
    );
}