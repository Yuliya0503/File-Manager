
import Messages from "../constants/messages.js";
import { currentDirectory } from '../utils/currentDirectory.js';
import { showOperationFailed } from "./statuses.js";

import path from 'node:path';
import { lstat } from "node:fs/promises";

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
  catch {
    showOperationFailed();
  }
}

export const getAbsolutePath = async(pth) => {
  try{
    const getCurrDirectory = currentDirectory.getCyrrentDir();
    const checkPath = path.isAbsolute(pth);
    if(checkPath) {
      return pth;
    } 
    else {
      return (path.join(getCurrDirectory, pth));
    }
  }
  catch{
    showOperationFailed();
  }
};

export const checkExistPath = async(pth) => {
  try {
    const file = await getAbsolutePath(pth);
    const stat = await lstat(file);
    return stat.isDirectory();
  }  
  catch{
    return false;
  }
};

export const isFileEx = async(path) => {
  try{
    const stat = await lstat(path);
    const res = stat.isFile()
    return res
  }
  catch{
    showOperationFailed();
  }
};

export const isDirectoryEx = async(path) => {
  try{
    const stat = await lstat(path);
    const res = stat.isDirectory();
    return res;
  }
  catch{
    showOperationFailed();
  }
};