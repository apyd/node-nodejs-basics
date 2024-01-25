import { rename as fileRename, open } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    try {
      const basePath = dirname(fileURLToPath(import.meta.url))
      const incorrectFilePath = join(basePath, 'files/wrongFilename.txt')
      const correctFilePath = join(basePath, 'files/properFilename.md')
      await open(correctFilePath, 'wx')
      await fileRename(incorrectFilePath, correctFilePath)
    }
    catch(error) {
      if(error.code === 'ENOENT' || error.code === 'EEXIST') {
        throw new Error('FS operation failed')
      }
      throw error
    }
};

await rename();