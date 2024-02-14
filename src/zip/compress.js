import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const compress = async () => {
  const gzip = createGzip()
  
  const currentDir = dirname(fileURLToPath(import.meta.url))
  const source = createReadStream(join(currentDir, 'files/fileToCompress.txt'))
  const destination = createWriteStream(join(currentDir, 'files/archive.gz'))

  const pipelineAsync = promisify(pipeline);

  try {
    await pipelineAsync(source, gzip, destination)
  }
  catch (error) {
    console.error('Error occurred: ', error)
    process.exit(1)
  }
};

await compress();