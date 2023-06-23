
import Messages from "../constants/messages.js";
import Currentdirectory from "./currentDirectory.js";
import path from 'node:path';

export const getUserName = async() =>{
  try{
    const argsList = process.argv.slice(2);
    const userNameArg = `--${Messages.USERNAME_ARGUMENT}=`;
    let username = Messages.DEFAULT_USERNAME;
    argsList.map(argName =>{
      if(argName.startsWith(userNameArg)) {
        username = argName.slice(userNameArg.length);
      }
    });
    return username;
  }
  catch(error) {
    throw new Error(`getUserName failed: ${error}`)
  }
}

export const getAbsolutePath = async(pth) => {
  try{
    const currentDirectory = new Currentdirectory();
    const getCurrDirectory = currentDirectory.getCyrrentDir();
    const checkPath = path.isAbsolute(pth);
    if(checkPath) {
      console.log(pth)
      return pth;
    } 
    else {
      console.log(path.join(getCurrDirectory, pth))
      return (path.join(getCurrDirectory, pth));
    }
  }
  catch(error){
    throw new Error(error);
  }
}