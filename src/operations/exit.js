import { readLineInterface } from '../utils/readlineInterface.js';

export const exit = async() => {
  readLineInterface.getReadlineIterface().close();
};