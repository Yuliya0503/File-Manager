
import Messages from "../constants/messages.js";
import Currentdirectory from "./currentDirectory.js";

import path from 'node:path';
import { stat } from "node:fs";

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
      return pth;
    } 
    else {
      return (path.join(getCurrDirectory, pth));
    }
  }
  catch(error){
    throw new Error(error);
  }
};

export const checkExistPath = async(pth) => {
  try {
    const file = await getAbsolutePath(pth);
    stat(file, err => {
      if (!err) {
        return true;
      }
      else if (err.code === 'ENOENT') {
        return false;
      }
  });     
  }
  catch(error){
    throw new Error(error);
  }
}