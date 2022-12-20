import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
  const readablePath = join(__dirname, 'files', 'fileToCompress.txt');
  const writablePath = join(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();
  const readable = createReadStream(readablePath);
  const writable = createWriteStream(writablePath);

  readable.pipe(gzip).pipe(writable);
};

await compress();