import os from 'node:os';
import OSMessages from '../../constants/osMessages.js';

export const showHomedir = async() => {
  const homedir = os.homedir();
  process.stdout.write(`${OSMessages.HOME_DIRECOTRY_MESS}: \x1b[33m${homedir}\x1b[0m\n`);
}