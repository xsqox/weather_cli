#!/usr/bin/env node
import { getArgs } from './utils/args.js';

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        // show help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
    // show weather
}

initCLI();
