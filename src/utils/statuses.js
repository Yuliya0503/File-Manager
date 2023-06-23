import Messages from "../constants/messages.js";

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
