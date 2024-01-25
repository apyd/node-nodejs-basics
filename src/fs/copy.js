import { mkdir, opendir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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
    if(error.code === 'ENOENT' || error.code === 'EEXIST') {
      throw new Error('FS operation failed')
    }
    throw error
  }

};

await copy();
