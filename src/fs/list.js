import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  try {
    const dirPath = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const dirContent = await readdir(dirPath)
    console.log(dirContent)
  }
  catch (error) {
    if(error.code === 'ENOENT') {
      throw new Error('FS operation failed')
    }
    throw error
  }
};

await list();