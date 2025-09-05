// src/main.ts
import WorkerFactory from './worker?worker';
import type { WorkerMessage, WorkerResponse } from './types';

const computeBtn = document.getElementById('computeBtn') as HTMLButtonElement;
const spinner = document.getElementById('spinner') as HTMLDivElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
const inputA = document.getElementById('inputA') as HTMLInputElement;
const inputB = document.getElementById('inputB') as HTMLInputElement;

const worker = new WorkerFactory();

worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
  spinner.classList.add('hidden'); // hide spinner
  resultDiv.textContent = `Worker result: ${e.data.output}`;
};

computeBtn.onclick = () => {
  const a = Number(inputA.value);
  const b = Number(inputB.value);

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = '⚠️ Please enter valid numbers.';
    return;
  }

  spinner.classList.remove('hidden'); // show spinner
  resultDiv.textContent = 'Computing...';

  const msg: WorkerMessage = { a, b };
  worker.postMessage(msg);
};
