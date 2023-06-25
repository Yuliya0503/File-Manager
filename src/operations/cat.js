import { getAbsolutePath } from '../utils/helpers.js';
import { showOperationFailed } from '../utils/statuses.js';

import fs from 'node:fs';

export const cat = async(command) => {
  const pathNew = command.arguments[0];
  const absolutePath = await getAbsolutePath(pathNew);
  const readStream = fs.createReadStream(absolutePath, 'utf-8');
    
  readStream.on('data', (data) => {
    process.stdout.write(data);
  });
  readStream.on('error', (error) => {
    showOperationFailed();
    return error;
  })

  
}