import {arch} from 'node:os';
import OSMessages from '../../constants/osMessages.js';

export const architecture = async() => {
  process.stdout.write(`${OSMessages.CPUS_ARCHITECTURE}: \x1b[33m${arch()}\x1b[0m\n`);
}