
// Detail page for place card,
// contains image, name, address, website info, etc.
export default function PlaceCardDetails({imgURL, name, description, address, websiteURL}){
    return (
        <article>
            <img src={imgURL} alt="" />
            <div>
                <p>{name}</p>
                <p>{description}</p>
                <p>{address}</p>
                <p>{websiteURL}</p>
            </div>
        </article>
    );
}