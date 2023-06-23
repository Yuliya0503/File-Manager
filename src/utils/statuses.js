import Messages from "../constants/messages.js";
import Currentdirectory from "./currentDirectory.js";

export const showOperationFailed = async() => {
  try {
    console.log(`\x1b[31m${Messages.ERROR_MESS}\x1b[0m`);
  }
  catch(error) {
    throw new Error(error);
  }
}

export const showInvalidInput = async() => {
  try {
    console.log(`\x1b[33m${Messages.INVALID_INPUT}\x1b[0m`);
  }
  catch(error) {
    throw new Error(error);
  }
}

export const showCurrentDir = async() => {
  try { 
  const currDir = new Currentdirectory();
  console.log(`\x1b[32m${Messages.END_OF_INPUT + ' ' + currDir.getCyrrentDir()}\x1b[0m`)
  }
  catch(error) {
    throw new Error(error);
  }
}
