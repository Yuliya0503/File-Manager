import { ls } from '../operations/ls.js';
import { up } from '../operations/up.js';
import  { cd } from '../operations/cd.js';
import { cat } from '../operations/cat.js';
import { add } from '../operations/add.js';

import Commands from '../constants/commands.js';

export const runCommands = async(command) => {
  const commandName = command.name;
  switch(commandName) {
    case Commands.COMMAND_LS:
      await ls();
      break;
    case Commands.COMMAND_UP:
      await up();
      break;
    case Commands.COMMAND_CD:
      await cd(command);
      break;
    case Commands.COMMAND_CAT:
      await cat(command);
      break;
    case Commands.COMMAND_ADD:
      await add(command);
      break;
  }
}