import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
  const writablePath = join(__dirname, 'files', 'fileToCompress.txt');
  const readablePath = join(__dirname, 'files', 'archive.gz');

  const readable = createReadStream(readablePath);
  const writable = createWriteStream(writablePath);
  const unzip = createGunzip();

  readable.pipe(unzip).pipe(writable);
};

await decompress();