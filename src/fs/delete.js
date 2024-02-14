import { rm } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../utils/index.js';

const remove = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToRemove.txt')
      await rm(filePath)
    }
    catch (error) {
      throwFSError(error)
    }
};

await remove();