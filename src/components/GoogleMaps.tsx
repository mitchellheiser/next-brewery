/**
 * Display google maps take props of lat and long to place marker
 */
interface GoogleMapsProps {
    longitude: string;
    latitude: string;
}

export default function GoogleMaps({longitude, latitude}:GoogleMapsProps){

     return(
         <div style={{ marginTop: "1rem" }}>
          <h4>Map:</h4>
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD4dt_giqeJAfmLYU0swE38NwDrkhgZRyo&q=${latitude},${longitude}`}
          ></iframe>
        </div>
     );
}