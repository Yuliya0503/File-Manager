import Messages from "../constants/messages.js";
import { getUserName } from "./helpers.js";

const sayHiToUser = async() => {
  try{
    const username = await getUserName();
    const welcome = `${Messages.WELCOME}, ${username}!`;
    process.stdout.write(`\x1b[35m${welcome}\x1b[0m\n`);
  }
  catch(error){
    throw new Error(error);
  }
};

const sayByeToUser = async() => {
  try{
    const username = await getUserName();
    const goodbye = `${Messages.GOODBYE_MESS}, ${username}, ${Messages.GOODBYE}!`
    process.stdout.write(`\x1b[35m${goodbye}\x1b[0m\n`);
  }
  catch(error){
    throw new Error(error);
  }
}
export { sayHiToUser, sayByeToUser };