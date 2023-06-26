
import Messages from "../constants/messages.js";
import { currentDirectory } from '../utils/currentDirectory.js';

import path from 'node:path';
import { lstat, stat } from "node:fs/promises";

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
};

export const isFileEx = async(path) => {
  try{
    const stat = await lstat(path);
    const res = stat.isFile()
    return res
  }
  catch{
    throw new Error();
  }
};

export const isDirectoryEx = async(path) => {
  try{
    const stat = await lstat(path);
    const res = stat.isDirectory();
    return res;
  }
  catch{
    throw new Error();
  }
};