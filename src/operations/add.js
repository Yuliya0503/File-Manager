import { getAbsolutePath } from '../utils/helpers.js';

import fs from 'node:fs/promises';

export const add = async(command) => {
  const pathNew = command.arguments;
  const absolutePath = await getAbsolutePath(pathNew);
  fs.writeFile(absolutePath, '');
}