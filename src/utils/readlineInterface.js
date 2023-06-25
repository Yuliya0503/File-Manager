class ReadlineInterface {
  getReadlineIterface() {
    return this.readline;
  };

  setReadlneInterface(readline) {
    this.readline = readline;
  }
}

const readLineInterface = new ReadlineInterface();
export { readLineInterface }