export const x = 1;

export const y = 2;

class Animal {
  static #legCounts() {
    return 4;
  }

  hasLegs() {
    return this.#legCounts > 0;
  }
}

// per 1 file we can export default 1 time
export default Animal;
