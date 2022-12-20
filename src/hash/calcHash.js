import fs from 'fs/promises';
import { createHash } from 'crypto';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const hash = createHash('sha256');
  hash.update(fileData);
  const hex = hash.digest('hex');
  console.log(hex);
};

await calculateHash();