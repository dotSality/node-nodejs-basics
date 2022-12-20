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

const list = async () => {
      try {
    const readPath = join(__dirname, 'files');
    const pathExists = await exists(readPath);
    if (pathExists) {
      const files = await fs.readdir(readPath);
      console.log(files);
    } else {
      throw new Error('FS operation failed');
    }
  } catch (e) {
    console.log(e.message);
  }
};

await list();