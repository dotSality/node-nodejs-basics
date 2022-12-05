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

const remove = async () => {
  try {
    const fileToRemove = 'fileToRemove.txt';
    const filePath = join(__dirname, 'files', fileToRemove);
    const fileExists = await exists(filePath);
    if (!fileExists) {
      throw new Error('FS operation failed');
    } else {
      await fs.rm(filePath);
    }
  } catch (e) {
    console.log(e.message);
  }
};

await remove();