import path from 'path';

import {currentDirectory} from '../utils/currentDirectory.js';

export const up = async() => {
  try{
    const dirNew = path.resolve(currentDirectory.getCyrrentDir(), '../');
    currentDirectory.setCyrrentDir(dirNew);
  }
  catch(error) {
    throw new Error(error);
  }
}