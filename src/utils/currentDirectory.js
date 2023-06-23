import DefaultStateConstants from "../constants/defaultConst.js";

export default class Currentdirectory {
  constructor() {
    this.currentDirectory = DefaultStateConstants.HOMEDIR;
  };

  setCyrrentDir(dir) {
    this.currentDirectory = dir;
  };

  getCyrrentDir() {
    return this.currentDirectory;
  };
}