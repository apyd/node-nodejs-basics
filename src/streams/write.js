import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
  try {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToWrite.txt')
    const writeStream = createWriteStream(filePath)
    stdin.on('data', chunk => writeStream.write(chunk))
    stdin.on('end', () => writeStream.end())
    stdin.on('error', error => { throw error })
  }
  catch(error) {
    throw error
  }
};

await write();