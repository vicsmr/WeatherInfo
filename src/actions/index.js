import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const GET_WEATHER = "GET_WEATHER";

export function getWeather(city) {
  const url = `${API_URL}&q=${city},es`;
  const request = axios.get(url);

  return {
    type: GET_WEATHER,
    payload: request
  };
}
