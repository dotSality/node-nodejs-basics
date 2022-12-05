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

const copyFolder = async (folderName) => {
  try {
    const destinationFolderName = `${folderName}_copy`;
    const workingPath = join(__dirname, folderName);
    const workDirExists = await exists(workingPath);
    if (!workDirExists) {
      throw new Error('FS operation failed');
    }
    const destinationPath = join(__dirname, destinationFolderName);
    const destinationExists = await exists(destinationPath);
    if (destinationExists) {
      throw new Error('FS operation failed');
    }
    await fs.mkdir(destinationPath);
    const files = await fs.readdir(workingPath);
    for (let file of files) {
      const filePath = join(workingPath, file);
      const destinationFilePath = join(destinationPath, file);
      await fs.copyFile(filePath, destinationFilePath);
    }
  } catch (e) {
    console.log(e.message);
  }
};

const copy = async () => {
  const folderName = 'files';
  await copyFolder(folderName);
};

await copy();