const SURF__LOCATIONS = [
    {
        name: "malibu beach",
        imageUrl: null,
        location: {
            city: "california",
            country: "usa"
        },
    },
    {
        name: "airlie beach",
        imageUrl: null,
        location: {
            city: "queensland",
            country: "australia"
        },
    },
    {
        name: "cloud nine",
        imageUrl: null,
        location: {
            city: "philippines",
            country: "siargao"
        },
    },
    {
        name: "vieux boucau",
        imageUrl: null,
        location: {
            city: "france",
            country: "hossegor"
        },
    },
];

function ShowLocation({ location }) {
    const locationStyle = {
        backgroundImage: "url(" + location.imageUrl + ")",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    return(
        <div className="card" style={locationStyle}>
            <h3>{location.name}</h3>
            <p>{location.location.city} | {location.location.country}</p>
            <button>view surf</button>
        </div>
    );
}

function LikeButton() {
    return (
        <div className="cards__container">
            {SURF__LOCATIONS.map(location => <ShowLocation location={location}/>)}
        </div>
    );
}

const rootNode = document.getElementById('surf-locations');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
