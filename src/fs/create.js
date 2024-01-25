import { open } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
 
const create = async () => {
    try {
      const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fresh.txt');
      const file = await open(filePath, 'wx')
      await file.writeFile('I am fresh and young')
    }
    catch (error) {
      if(error.code === 'EEXIST') {  
        throw new Error('FS operation failed')
      }
      throw error
    }
};

await create();