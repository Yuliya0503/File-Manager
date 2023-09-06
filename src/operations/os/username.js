import os from 'node:os';
import OSMessages from '../../constants/osMessages.js';

export const userName = async() => {
  const nameInfo = os.userInfo().username;
  process.stdout.write(`${OSMessages.SYSTEM_USER_NAME}: \x1b[33m${nameInfo}\x1b[0m\n`);
};