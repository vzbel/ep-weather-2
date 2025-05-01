import placesData from "./Places";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// Detail page for place card,
// contains image, name, address, website info, etc.
export default function PlaceCardDetails(){
    // Get the place with the given ID
    let {id} = useParams();

    // State for the place object
    const [place, setPlace] = useState(null)

    // Change place when ID changes
    useEffect(()=>{
        setPlace(placesData[id-1])
    }, [id])

    place ? console.log(place.websiteURL) : <></>
    return (
        place ?
        <article className="flex items-center gap-10 max-w-4xl mx-auto py-36">
            {/* Image for place */}
            <img src={place.imgURL} alt="" className="max-w-1/2"/>
            {/* Place data like name, description, etc */}
            <div className="grow">
                <div className="mb-4">
                    <p className="text-white text-2xl">{place.name}</p>
                    <p className="text-gray-400">{place.address}</p>
                </div>
                <p className="text-gray-400">{place.description}</p>
                {/* Link to place's website */}
                <Link to={place.website} className="bg-blue-400 text-white my-5 block max-w-32 px-4 py-2">Visit Website</Link>
            </div>
        </article>
        :
        <p>Loading...</p>
    );
}