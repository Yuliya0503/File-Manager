import path from 'path';

import Currentdirectory from '../utils/currentDirectory.js';

export const up = async() => {
  try{
    const currDir = new Currentdirectory();
    const dirNew = path.resolve(currDir.getCyrrentDir(), '../');
    currDir.setCyrrentDir(dirNew);
  }
  catch(error) {
    throw new Error(error);
  }
}