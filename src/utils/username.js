import Messages from "../constants/messages.js";

const getUserName = async() =>{
  try{
    const argsList = process.argv.slice(2);
    const userNameArg = `--${Messages.USERNAME_ARGUMENT}=`;
    let username = Messages.DEFAULT_USERNAME;
    argsList.map(argName =>{
      if(argName.startsWith(userNameArg)) {
        username = argName.slice(userNameArg.length);
      }
    });
    console.log(username);
    return username;
  }
  catch(error) {
    throw new Error(`getUserName failed: ${error}`)
  }
}

export { getUserName};