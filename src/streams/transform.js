import { stdin, stdout } from 'node:process'
import { Transform } from 'node:stream';

const transform = async () => {
  class ReverseText extends Transform {
    constructor() {
      super()
    }
    _transform(chunk, _, callback) {
      this.push(chunk.toString().split('').reverse().join('') + '\n')
      callback()
    }
  }
  try {
    const reverseText = new ReverseText()
    stdin.pipe(reverseText).pipe(stdout)
  }
  catch(error) {
    throw error
  }
};

await transform();