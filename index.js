#!/usr/bin/env node
import { getArgs } from './utils/args.js';
import { printHelp, printError, printSuccess, printWeather } from './services/log.service.js';
import { saveKeyValue, KEY_MAPPER, getKeyValue } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token has not been provided');
        return;
    }
    try {
        await saveKeyValue(KEY_MAPPER.token, token);
        printSuccess('Token saved');
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('City has not been provided');
        return;
    }
    try {
        await saveKeyValue(KEY_MAPPER.city, city);
        printSuccess('City saved');
    } catch (e) {
        printError(e.message);
    }
};

const getForecast = async () => {
    try {
        const city = await getKeyValue(KEY_MAPPER.city);
        const weather = await getWeather(city || 'moscow');
        printWeather(weather);
    } catch (e) {
        if (e.response?.status === 404) {
            printError('City not found');
        } else if (e.response?.status === 401) {
            printError('Forbidden; specify the correct token');
        } else {
            printError(e.message);
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForecast();
};

initCLI();
