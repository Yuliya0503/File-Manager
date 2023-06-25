import { ls } from '../operations/ls.js';
import { up } from '../operations/up.js';

import Commands from '../constants/commands.js';

export const runCommands = async(command) => {
  switch(command) {
    case Commands.COMMAND_LS:
      await ls();
      break;
    case Commands.COMMAND_UP:
      await up();
      break;
  }
}