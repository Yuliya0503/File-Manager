import { ls } from '../operations/ls.js';
import { up } from '../operations/up.js';
import  { cd } from '../operations/cd.js';
import { cat } from '../operations/cat.js';
import { add } from '../operations/add.js';
import { rn } from '../operations/rn.js';
import { rm } from '../operations/rm.js';
import { os } from '../operations/os/osSwitch.js';
import { hash } from '../operations/hash.js';
import { exit } from '../operations/exit.js';
import { compress } from '../operations/compress.js';
import { decompress } from '../operations/decompress.js';
import { cp } from '../operations/cp.js';
import { mv } from '../operations/mv.js';

import Commands from '../constants/commands.js';
import { showInvalidInput } from '../utils/statuses.js';

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
    case Commands.COMMAND_RN:
      await rn(command);
      break;
    case Commands.COMMAND_RM:
      await rm(command);
      break;
    case Commands.COMMAND_OS:
      await os(command);
      break;
    case Commands.COMMAND_HASH:
      await hash(command);
      break;
    case Commands.COMMAND_EXIT:
      await exit();
      break;
    case Commands.COMMAND_COMPRESS:
      await compress(command);
      break;
    case Commands.COMMAND_DECOMPRESS:
      await decompress(command);
      break;
    case Commands.COMMAND_CP:
      await cp(command);
      break;
    case Commands.COMMAND_MV:
      await mv(command);
      break;
    default: 
      await showInvalidInput();
  }
}