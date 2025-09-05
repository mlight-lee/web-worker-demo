// src/worker.ts
import { add } from 'lodash-es';
import type { WorkerMessage, WorkerResponse } from './types';

// Simulate heavy computation
function heavyComputation(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) { // large loop = CPU heavy
    sum += (a * b + i) % 7;
  }
  return add(sum, a + b);
}

self.onmessage = (e: MessageEvent<WorkerMessage>) => {
  const { a, b } = e.data;
  const result = heavyComputation(a, b);
  const response: WorkerResponse = { output: result };
  (self as DedicatedWorkerGlobalScope).postMessage(response);
};
