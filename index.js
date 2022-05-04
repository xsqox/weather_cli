#!/usr/bin/env node
import { getArgs } from './utils/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, KEY_MAPPER } from './services/storage.service.js';
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

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getWeather('montreal');
};

initCLI();
