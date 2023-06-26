import Commands from '../../constants/commands.js';
import { eol } from './eol.js';

export const os = async(command) => {
  const commandArg = command.arguments[0];
  switch (commandArg) {
    case Commands.OS_EOL:
      await eol();
      break;
  } 
}