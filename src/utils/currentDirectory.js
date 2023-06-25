//import DefaultStateConstants from "../constants/defaultConst.js";
import os from 'node:os';

const homedir = os.homedir();

class Currentdirectory {
  constructor() {
    this.currentDirectory = homedir;
  };

  setCyrrentDir(dir) {
    this.currentDirectory = dir;
  };

  getCyrrentDir() {
    return this.currentDirectory;
  };
}

const currentDirectory = new Currentdirectory();
export { currentDirectory };