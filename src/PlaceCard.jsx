export default function PlaceCard({imgURL, name, address}){
    return (
        <article className="flex flex-col max-w-md bg-amber-50">
            <img className="flex-1 object-cover" src={imgURL} alt="" />
            <div className="bg-gray-900 py-4 px-4 rounded-md border-b-2 border-b-yellow-500">
                <p className="text">{name}</p>
                <p className="text-sm text-gray-400">{address}</p>
            </div>
        </article>
    );
}