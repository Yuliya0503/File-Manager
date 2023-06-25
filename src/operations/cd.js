import { getAbsolutePath, checkExistPath } from "../utils/helpers.js";
import { currentDirectory } from "../utils/currentDirectory.js";

export const cd = async(command) => {
  try{
    const pathNew = command.arguments;
    const newAbsolutePath = await getAbsolutePath(pathNew);
    await checkExistPath(newAbsolutePath);
    currentDirectory.setCyrrentDir(newAbsolutePath); 
  }
  catch(error){
    throw new Error(error);
  }
}