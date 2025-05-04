import axios from 'axios';
import { WeatherData } from '../types/weather';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'db43ee2c4ef73b3af9fba6f91381ee42';


export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log('Response: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('City not found or API error');
  }
};