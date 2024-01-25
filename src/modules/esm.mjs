import { readFile } from 'node:fs/promises';
import { sep, dirname } from 'node:path';
import { release, version } from 'node:os'
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import './files/c.js'

const random = Math.random();
const filePath = fileURLToPath(import.meta.url)
const dirPath = dirname(filePath)

let unknownObject;

async function loadJsonFile(filePath) {
  return await readFile(new URL(filePath, import.meta.url), { encoding: 'utf8'})
}

unknownObject = await loadJsonFile(random > 0.5 ? './files/a.json' : './files/b.json')

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${dirPath}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

 export {
    unknownObject,
    myServer,
};
