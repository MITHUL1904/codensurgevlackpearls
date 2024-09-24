
import React, { useState, useEffect } from 'react';





function Wheather() {

    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Setting the fetch options
        const options = { method: 'GET', headers: 
        { accept: 'application/json' } };

        // Fetching weather data
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=td3y0adtosfy3AxfcFxLehnos7U3RQj8', options)
        .then(response => response.json())
        .then(data => {
            console.log(data[0]);
            // Set the weather data to state
            setWeatherData(data);
        })
        .catch(err => {
            // Set the error to state if there is an error
            setError(err);
            console.error(err);
        });
    }, []);


    return ( 
    <div>

<div>
      <main>
        {weatherData && (
          <div>
            <h2>Weather Data:</h2>
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
          </div>
        )}
        {error && <p>Error fetching data: {error.message}</p>}
      </main>
    </ div>


    </div> 
    );
}

export default Wheather;