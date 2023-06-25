import { getAbsolutePath, checkExistPath } from "../utils/helpers.js";
import { currentDirectory } from "../utils/currentDirectory.js";

export const cd = async(command) => {
  const pathNew = command.arguments;
  const newAbsolutePath = await getAbsolutePath(pathNew);

  await checkExistPath(newAbsolutePath);

  currentDirectory.setCyrrentDir(newAbsolutePath); 
}