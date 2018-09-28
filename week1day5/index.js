var chalk = require("chalk");

// var message = "Hello, World \n I am a green line \n I am underline \n And I am all cooky!!!"

console.log(chalk.bold("Hello, World\n" +
  chalk.red("I am a green line\n") +
    chalk.blue("Psych! Sometimes I lie") + chalk.yellow('.') +
    chalk.redBright('.') + chalk.green('.\n') +
    chalk.yellow.underline.bold('...here, I underlie\n') +
    chalk.blue('A') +
    chalk.yellow('n') +
    chalk.blue('d') +
    chalk.bgRed('now') +
    chalk.bgYellow.blue(' I ') +
    chalk.italic('am ') + chalk.bgBlue('ALL ') +
    chalk.redBright('cooky!!!')));



