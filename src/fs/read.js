import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../../utils/index.js';

const read = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToRead2.txt')
      const fileContent = await readFile(filePath, { encoding: 'utf8'})
      console.log(fileContent)
    }
    catch (error) {
      throwFSError(error)
    }
};

await read();