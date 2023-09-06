import { getAbsolutePath, checkExistPath } from "../utils/helpers.js";
import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

export const decompress = async(command) => {
  const fileToDecompress = command.arguments[0];
  const fileNameDestination = command.arguments[1];

  const absolutePathToDecompress = await getAbsolutePath(fileToDecompress);
  const absolutePathDestination = await getAbsolutePath(fileNameDestination);
  
  await checkExistPath(absolutePathToDecompress);

  const readStream = createReadStream(absolutePathToDecompress);
  const writeStream = createWriteStream(absolutePathDestination);

  const brotli = zlib.createBrotliDecompress();
  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on('finish', () => {
    
  })

}