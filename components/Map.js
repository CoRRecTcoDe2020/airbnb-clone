import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import { getCenter, getDistance } from 'geolib';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform the search results object into the 
    // { latitude: 52.516272, longitude: 13.377722 }
    // object
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/parsash/cky5svdgz1jni14oabht96e3z"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                           role="img"
                           onClick={() => setSelectedLocation(result)}
                           className="cursor-pointer text-2xl animate-bounce"
                           aria-label="push-pin"
                        >
                           📌
                        </p>
                    </Marker>

                    {/* The popup that show if we click on a Marker! */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                           className="font-Poppins font-semibold bg-red-500 rounded-lg"
                           onClose={() => setSelectedLocation({})}
                           closeOnClick={true}
                           latitude={result.lat}
                           longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}

        </ReactMapGL>
    );
}

export default Map;