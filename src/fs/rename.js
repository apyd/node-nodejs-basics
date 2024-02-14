import { rename as fileRename, open } from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../../utils/index.js';

const rename = async () => {
    try {
      const basePath = dirname(fileURLToPath(import.meta.url))
      const incorrectFilePath = join(basePath, 'files/wrongFilename.txt')
      const correctFilePath = join(basePath, 'files/properFilename.md')
      await open(correctFilePath, 'wx')
      await fileRename(incorrectFilePath, correctFilePath)
    }
    catch(error) {
      throwFSError(error)
    }
};

await rename();