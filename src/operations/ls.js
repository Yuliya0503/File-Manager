import { currentDirectory } from '../utils/currentDirectory.js';
import fs from 'fs/promises';


export  const ls = async() => {
  try {
    
    const currDir = currentDirectory.getCyrrentDir();
    const dirList = await fs.readdir(currDir, {withFileTypes: true});
    const filesArr = dirList
      .filter(file => file.isDirectory() || file.isFile())
      .map((file) => {
        const type = file.isDirectory() ? 'directory' : 'file';
        return {
          'name': file.name, 
          'type': type
        };
      })
      .sort((a, b) => a.type === b.type ? a.name.localeCompare(b.name) : a.type === 'file' ? 1 : -1) 
    console.table(filesArr);
  }
  catch(error){
    throw new Error(error);
  }
};

