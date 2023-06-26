import { getAbsolutePath } from "../utils/helpers.js";
import fs from 'node:fs/promises';

export const rm = async(command) => {
  const pathToFile = command.arguments[0];
  const absolutePathToFile = await getAbsolutePath(pathToFile);
  
  await fs.rm(absolutePathToFile);
};