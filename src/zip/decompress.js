import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const decompress = async () => {
  const unzip = createGunzip()
  
  const currentDir = dirname(fileURLToPath(import.meta.url))
  const source = createReadStream(join(currentDir, 'files/archive.gz'))
  const destination = createWriteStream(join(currentDir, 'files/fileToCompress.txt'))

  const pipelineAsync = promisify(pipeline);

  try {
    await pipelineAsync(source, unzip, destination)
  }
  catch (error) {
    console.error('Error occurred: ', error)
    process.exit(1)
  }
};

await decompress();