import axios from 'axios';
import { getKeyValue, KEY_MAPPER } from './storage.service.js';

export const getWeather = async (city) => {
    const token = await getKeyValue(KEY_MAPPER.token);
    if (!token) {
        throw new Error('Token is not set, specify it using -t [API_KEY]');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            units: 'metric',
        },
    });
    return data;
};
