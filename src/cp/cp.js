import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
  const childPath = join(__dirname, 'files', 'script.js');
  const child = spawn('node', [childPath, ...args]);

  child.stdout.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  process.stdin.pipe(child.stdin);
};

spawnChildProcess([1, 2, 3, 4]);