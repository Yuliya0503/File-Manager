import Commands from '../../constants/commands.js';
import { eol } from './eol.js';
import { cpus } from './cpus.js';
import { showHomedir } from './homedir.js';

export const os = async(command) => {
  const commandArg = command.arguments[0];
  switch (commandArg) {
    case Commands.OS_EOL:
      await eol();
      break;
    case Commands.OS_CPUS:
      await cpus();
      break;
    case Commands.OS_HOMEDIR:
      await showHomedir();
      break;
  } 
}