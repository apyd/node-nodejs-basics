import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../../utils/index.js';

const list = async () => {
  try {
    const dirPath = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const dirContent = await readdir(dirPath)
    console.log(dirContent)
  }
  catch (error) {
    throwFSError(error)
  }
};

await list();