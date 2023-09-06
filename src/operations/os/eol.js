import OSMessages from '../../constants/osMessages.js';
import {EOL} from 'node:os';

export const eol = async() => {
  const eolInfo = JSON.stringify(EOL);
  process.stdout.write(`${OSMessages.END_OF_LINE_MESS}: \x1b[33m${eolInfo}\x1b[0m\n`);
};