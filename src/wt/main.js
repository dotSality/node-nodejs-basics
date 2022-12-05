import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const createThread = (workerData, workerPath) => {
  return new Promise((res, rej) => {
    const worker = new Worker(workerPath, { workerData });

    worker.on('message', (data) => {
      res({ status: 'resolved', data });
    });

    worker.on('error', () => {
      rej({ status: 'error', data: null });
    });
  });
};

const performCalculations = async () => {
  const workerPath = join(__dirname, 'worker.js');
  const cpus = os.cpus();
  const threadsArray = cpus.map((_, idx) => createThread(idx + 10, workerPath));
  const results = await Promise.allSettled(threadsArray);
  const output = results.map((res) => res.value ?? res.reason);
  console.log(output);
};

await performCalculations();