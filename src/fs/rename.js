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

const rename = async () => {
  try {
    const workDir = join(__dirname, 'files');
    const targetFileName = 'wrongFilename.txt';
    const resultFileName = 'properFilename.md';
    const targetPath = join(workDir, targetFileName);
    const resultPath = join(workDir, resultFileName);
    const targetExists = await exists(targetPath);
    if (targetExists) {
      const resultExist = await exists(resultPath);
      if (!resultExist) {
        await fs.rename(targetPath, resultPath);
      } else {
        throw new Error('FS operation failed');
      }
    } else {
      throw new Error('FS operation failed');
    }
  } catch (e) {
    console.log(e.message);
  }
};

await rename();