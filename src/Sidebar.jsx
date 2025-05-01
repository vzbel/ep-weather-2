import { SunIcon } from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';

// Sidebar containing links to different pages on the site
export default function Sidebar(){
    return (
        <nav className="flex-1 py-10 px-3 bg-gray-900 text-white max-w-3xs">
            <h1 className="flex items-center mb-6"><SunIcon className="w-8 mr-2"/>EPWeather</h1>
            <Link to="/" className="bg-gray-800 p-3 border-l-2 text-sm block">Today's Forecast</Link>
        </nav>
    );
}