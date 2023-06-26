import os from 'node:os';
import OSMessages from '../../constants/osMessages.js';


export const cpus = async() => {
  const cpu = os.cpus();  
  const cpuData = cpu.map((info) => {
    const cpuSpeed = info.speed / 1000;
    const cpuModel = info.model;
    
    return {
      [OSMessages.CPUS_MODEL]: cpuModel,
      [OSMessages.CPUS_CLOCK_RATE]: cpuSpeed
    };
  });
  
  process.stdout.write(`${OSMessages.CPUS_AMOUNT}: \x1b[33m${cpu.length}\x1b[0m\n`);
  console.table(cpuData)

}