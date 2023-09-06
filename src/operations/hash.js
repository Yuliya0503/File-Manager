import {createHash} from 'node:crypto';
import { readFile } from 'fs/promises';
import { getAbsolutePath } from '../utils/helpers.js';

export const hash = async(command) => {
  const fileToHash = command.arguments[0];
  const absolutePathToFile = await getAbsolutePath(fileToHash);
  const dataFile = await readFile(absolutePathToFile)
  const hash = createHash('sha256');
  hash.update(dataFile);
  const cryptoFile = hash.digest('hex');

  process.stdout.write(`Hash: \x1b[33m${cryptoFile}\x1b[0m\n`);
}