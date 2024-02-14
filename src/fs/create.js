import { open } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../../utils/index.js';
 
const create = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fresh.txt');
      const file = await open(filePath, 'wx')
      await file.writeFile('I am fresh and young')
    }
    catch (error) {
      throwFSError(error)
    }
};

await create();