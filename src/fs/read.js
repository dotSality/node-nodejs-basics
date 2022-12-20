import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const exists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const read = async () => {
  try {
    const fileName = 'fileToRead.txt';
    const filePath = join(__dirname, 'files', fileName);
    const fileExists = await exists(filePath);
    if (fileExists) {
      const fileData = await fs.readFile(filePath, 'utf-8');
      console.log(fileData);
    } else {
      throw new Error(`FS operation failed`);
    }
  } catch (e) {
    console.log(e.message);
  }
};

await read();