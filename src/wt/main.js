import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { availableParallelism } from 'node:os';
import { Worker } from 'node:worker_threads';

const BASE_VALUE = 10;

const performCalculations = async () => {
  const workerFilePath = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');
  const workersAmount = availableParallelism();
  const workers = Array(workersAmount).fill(null);
  const results = Array(workersAmount).fill(null);
  for (let i = 0; i < workersAmount; i++) {
    workers[i] = new Worker(workerFilePath)
    workers[i].postMessage(BASE_VALUE+i+1)
    results[i] = await new Promise((resolve, reject) => {
      workers[i].on('message', (message) => {
        if (message.status === 'resolved') {
          resolve(message.data);
        } else {
          reject(message.data);
        }
      });
      workers[i].once('error', (err) => {
        reject({ status: 'error', data: err });
      });
    })
  }

  try {
    const finalResults = await Promise.all(results);
    console.log(finalResults);
  } catch (error) {
    console.error(error);
  } finally {
    workers.forEach(worker => worker.terminate());
  }
};

await performCalculations();