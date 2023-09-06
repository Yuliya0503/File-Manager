import { getAbsolutePath, checkExistPath } from "../utils/helpers.js";
import { currentDirectory } from "../utils/currentDirectory.js";

import { access} from 'node:fs/promises';

export const cd = async(command) => {
  const pathNew = command.arguments[0];
  const newAbsolutePath = await getAbsolutePath(pathNew);
  await access(newAbsolutePath)
  currentDirectory.setCyrrentDir(newAbsolutePath); 
  
}