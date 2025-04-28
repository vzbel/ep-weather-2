import { SunIcon } from '@heroicons/react/24/outline';
import PlaceCard from './PlaceCard';

export default function Dashboard(){
    return (
        <main className="px-20 py-40 bg-gray-950 flex-1 text-white">
            <div className="flex p-5 py-8 gap-4 bg-gray-900 max-w-lg flex-wrap items-center rounded-xl mb-24 shadow-sm">
                <SunIcon className="text-yellow-400 max-w-32"/>
                <div className="flex-1">
                    <div className="flex items-center mb-2 gap-2">
                        <p className="text-4xl">71&deg;</p>
                        <p className="text-2xl">Clear</p>
                    </div>
                    <p>El Paso, Texas</p>
                    <p className="text-gray-400">AQI: 65</p>
                    <p className="text-gray-400">CO: 45</p>
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
    );
}