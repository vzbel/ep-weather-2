import { Link } from "react-router-dom";

export default function PlaceCard({imgURL, name, address, description, id}){
    return (
        <article className="flex flex-col max-w-sm shadow-sm">
            <img className="object-cover h-64" src={imgURL} alt="" />
            <div className="min-h-64 py-4 px-4 border-b-2 border-b-blue-500">
                <div className="mb-6">
                    <p className="text">{name}</p>
                    <p className="text-sm text-gray-400">{address}</p>
                </div>
                <p className="text-gray-400 mb-14">{description}</p>
                <Link className="bg-blue-400 text-white block max-w-32 text-center px-4 py-2" to={`/places/${id}`}>View Info</Link>
            </div>
        </article>
    );
}