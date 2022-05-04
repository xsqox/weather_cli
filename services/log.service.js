import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
    console.log(`${chalk.bgRed(' ERROR ')}: ${error}`);
};

export const printSuccess = (msg) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')}: ${msg}`);
};

export const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')} 
    Without parameters - show weather 
    -s [CITY] specify city 
    -h [HELP] show help 
    -t [API_KEY] specify API_KEY`)
    );
};
