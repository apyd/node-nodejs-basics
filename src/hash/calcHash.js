import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  try {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files/fileToCalculateHashFor.txt')
    const readStream = createReadStream(filePath)
    const hashStream = createHash('sha256')
    readStream.on('data', chunk => {
      hashStream.update(chunk)
    })

    readStream.on('end', () => {
      const hash = hashStream.digest('hex')
      console.log(hash)
    })

    readStream.on('error', error => {
      throw error
    })
  }
  catch(error) {
    throw error
  }
};

await calculateHash();