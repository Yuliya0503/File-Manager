import readline from 'node:readline/promises';
import { stdin as input, stdout as output} from 'node:process';
import ReadlineInterface from '../utils/readlineInterface.js';
import { sayByeToUser, sayHiToUser } from '../utils/helloAndBye.js';
import { showCurrentDir, showInvalidInput, showOperationFailed } from '../utils/statuses.js';
import { runCommands } from './runCommands.js';

const rl = readline.createInterface({ input, output });
const readlineInerfase = new ReadlineInterface();
readlineInerfase.setReadlneInterface(rl);

export const fileManager = async() => {
  await sayHiToUser();
  await showCurrentDir();

  rl.prompt();

  rl.on('line', async (data) => {
    const str = data
      .toString()
      .trim()
      .split(' ');
    let command = str[0];
    try {
      await runCommands(command);
    }
    catch{
      await showOperationFailed();
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
