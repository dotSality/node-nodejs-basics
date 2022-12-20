import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const readablePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const chunks = [];
  const stream = fs.createReadStream(readablePath);
  stream.on('readable', () => {
    let chunk;
    while ((chunk = stream.read()) !== null) {
      chunks.push(chunk);
    }
  });

  stream.on('end', () => {
    const result = chunks.join('');
    process.stdout.write(result);
  });
};

await read();