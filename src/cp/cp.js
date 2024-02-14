import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin, stdout } from 'node:process';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const scriptPath = join(dirname(fileURLToPath(import.meta.url)), 'files/script.js')
    const child = spawn('node', [scriptPath, ...args]);
    
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);