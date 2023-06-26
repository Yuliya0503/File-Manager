import { getAbsolutePath, checkExistPath, isDirectoryEx, isFileEx } from '../utils/helpers.js';
import { showOperationFailed } from '../utils/statuses.js';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs'; 

export const cp = async(command) => {
  const fileToCopy = command.arguments[0];
  const direcotryForCopy = command.arguments[1];
  
    const absolutePathDestination = await getAbsolutePath(direcotryForCopy);
    const absolutePathToCopy = await getAbsolutePath(fileToCopy);

    await checkExistPath(absolutePathDestination);
    await checkExistPath(absolutePathToCopy);
    await isDirectoryEx(absolutePathDestination);
    await isFileEx(absolutePathToCopy);

    const fileName = path.basename(fileToCopy);
    const fileCopied = path.join(absolutePathDestination, fileName);

    const readStream = createReadStream(absolutePathToCopy);
    const writestream = createWriteStream(fileCopied);

    readStream.on('data', data => {
      writestream.write(data);
    })
  
  
}