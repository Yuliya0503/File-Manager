import readline from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';
import { readLineInterface } from '../utils/readlineInterface.js';
import { sayByeToUser, sayHiToUser } from '../utils/helloAndBye.js';
import { showCurrentDir, showInvalidInput, showOperationFailed } from '../utils/statuses.js';
import { runCommands } from './runCommands.js';
import { isCommandArgsCount } from './controllerCountArguments.js';

const rl = readline.createInterface({ input, output });
readLineInterface.setReadlneInterface(rl);

export const fileManager = async() => {
  await sayHiToUser();
  await showCurrentDir();

  rl.prompt();

  rl.on('line', async (data) => {
    const str = data
      .toString()
      .trim()
      .split(' ');
    const command = {
      name: str[0],
      arguments: str.slice(1), 
    };
    const commandCallError = (await isCommandArgsCount(command));
    if(!commandCallError) {
      await showInvalidInput();
    } else {
      try {
        await runCommands(command);
      }
      catch{
        await showOperationFailed();
      }
    }
    
    await showCurrentDir();
    rl.prompt();

  });

  rl.on('SIGINT', () => {
    rl.close();
  });

  rl.on('close', async() =>{
    await sayByeToUser();
    process.exit(0);
  })
}
