import OSMessages from '../../constants/osMessages.js';
import DefaultStateConstants from '../../constants/defaultConst.js'

export const showHomedir = async() => {
  process.stdout.write(`${OSMessages.HOME_DIRECOTRY_MESS}: \x1b[33m${DefaultStateConstants.HOMEDIR}\x1b[0m\n`);
}