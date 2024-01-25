import { rm } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToRemove.txt')
      await rm(filePath)
    }
    catch (error) {
      if(error.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
      throw error
    }
};

await remove();