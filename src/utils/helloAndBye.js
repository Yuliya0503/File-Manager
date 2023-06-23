import Messages from "../constants/messages.js";
import { getUserName } from "./username.js";

const sayHiToUser = async() => {
  const username = await getUserName();
  const welcome = `${Messages.WELCOME}, ${username}!`;
  console.log(`\x1b[35m${welcome}\x1b[0m`);
};

const sayByeToUser = async() =>{
  const username = await getUserName();
  const goodbye = `${Messages.GOODBYE_MESS}, ${username}, ${Messages.GOODBYE}!`
  console.log(`\x1b[35m${goodbye}\x1b[0m`);
}
export { sayHiToUser, sayByeToUser };