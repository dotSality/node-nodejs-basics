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

const create = async () => {
  try {
    const filePath = join(__dirname, 'files', 'fresh.txt');
    const fileData = 'I am fresh and young';
    const isExist = await exists(filePath);
    if (isExist) {
      throw new Error('FS operation failed');
    } else {
      await fs.appendFile(filePath, fileData);
    }
  } catch (e) {
    console.log(e.message);
  }
};

await create();