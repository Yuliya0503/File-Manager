import path from 'path';

import {currentDirectory} from '../utils/currentDirectory.js';
import { showOperationFailed } from "../utils/statuses.js";

export const up = async() => {
  try{
    const dirNew = path.resolve(currentDirectory.getCyrrentDir(), '../');
    currentDirectory.setCyrrentDir(dirNew);
  }
  catch{
    showOperationFailed();
  }
}