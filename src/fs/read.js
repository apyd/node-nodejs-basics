import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';

const read = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToRead2.txt')
      const fileContent = await readFile(filePath, { encoding: 'utf8'})
      console.log(fileContent)
    }
    catch (error) {
      if(error.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
      throw error
    }
};

await read();