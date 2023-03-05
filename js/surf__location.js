const SURF__LOCATIONS = [
    {
        name: "malibu beach",
        imageUrl: "../image/surf_location/malibu_beach_image.jpg",
        location: {
            city: "california",
            country: "usa"
        },
        viewLink: "#",
    },
    {
        name: "airlie beach",
        imageUrl: "../image/surf_location/airlie_beach_image.jpg",
        location: {
            city: "queensland",
            country: "australia"
        },
        viewLink: "#",
    },
    {
        name: "cloud nine",
        imageUrl: "../image/surf_location/cloud_nine_beach_image.jpg",
        location: {
            city: "philippines",
            country: "siargao"
        },
        viewLink: "#",
    },
    {
        name: "vieux boucau",
        imageUrl: "../image/surf_location/vieux_boucau_beach_image.jpg",
        location: {
            city: "france",
            country: "hossegor"
        },
        viewLink: "#",
    },
];

function ShowLocation({ location, index }) {
    const locationStyle = {
        backgroundImage: "url(" + location.imageUrl + ")",
    }
    return(
        <div className={"cards cards__num__" + index} style={locationStyle}>
            <h3 className={"location__name"}>{location.name}</h3>
            <p className={"location__place"}>{location.location.city} | {location.location.country}</p>
            <a href={"#"} className={"surf__button"}>
                <button>
                    <span className="surf__button--view">
                        view
                    </span>
                    <span className="surf__button--surf">
                        surf
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3688 19.5872L23.5824 11.4365C24.3348 10.6853 24.3348 9.46609 23.5824 8.71746L15.3688 0.561846C14.6101 -0.189295 13.3821 -0.185526 12.6234 0.561846C11.8723 1.31424 11.8723 2.52844 12.6234 3.28084L17.4285 8.04826L2.01437 8.04826C0.900866 8.04826 -1.90735e-05 8.94789 -1.90735e-05 10.0614C-1.90735e-05 11.1736 0.900866 12.0745 2.01437 12.0745L17.4575 12.0745L12.6234 16.8671C11.8723 17.6182 11.8723 18.8337 12.6234 19.5848C13.3809 20.3372 14.6089 20.3385 15.3688 19.5873V19.5872Z" fill="white"/>
                        </svg>
                    </span>
                </button>
            </a>
        </div>
    );
}

function LikeButton() {
    return (
        <div className="cards__container">
            {SURF__LOCATIONS.map((location, index) => <ShowLocation key={location.name} location={location} index={index}/>)}
        </div>
    );
}

const rootNode = document.getElementById('surf-locations');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));


// we need better animation for locations