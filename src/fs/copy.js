import { mkdir, opendir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { throwFSError } from '../../utils/index.js';

const copy = async () => {
  try {
    const basePath = dirname(fileURLToPath(import.meta.url))
    const srcPath = join(basePath, 'files');
    const distPath = join(basePath, 'files-copy');
    const srcDir = await opendir(srcPath);
    await mkdir(distPath);

    for await(const file of srcDir) {
      await copyFile(join(srcPath, file.name), join(distPath, file.name));
    }
  }
  catch(error) {
    throwFSError(error);
  }

};

await copy();
