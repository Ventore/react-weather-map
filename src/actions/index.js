import axios from 'axios';

const WEATHER_API_KEY = 'bebc0d50cb1d3f6b929e6c7cd3d0411f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(URL);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}