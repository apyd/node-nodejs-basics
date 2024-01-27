import { createReadStream } from 'node:fs';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const read = async () => {
  try {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToRead.txt')
    const readStream = createReadStream(filePath)
    readStream.on('data', chunk => stdout.write(chunk))
    readStream.on('error', error => {
      throw error
    })
  }
  catch(error) {
    throw error
  }
};

await read();