import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
  const readableFromTerminal = process.stdin;

  const writablePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writable = fs.createWriteStream(writablePath);

  readableFromTerminal.on('data', (chunk) => {
    const data = chunk.toString();
    writable.write(data);
  });
};

await write();