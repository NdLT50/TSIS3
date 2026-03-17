import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PricingEngineService {
  calculate(inputs: any) {
    // 1. Compute Cost (Cloud Functions)
    const executionSeconds = inputs.executionTimeMs / 1000;
    const gbSeconds = (inputs.memoryMb / 1024) * executionSeconds * inputs.invocations;
    const computeCost = (inputs.invocations / 1000000 * 0.40) + (gbSeconds * 0.0000025);

    // 2. LLM Cost (Gemini)
    const rates = inputs.model === 'flash' 
      ? { input: 0.075 / 1000000, output: 0.30 / 1000000 }
      : { input: 3.50 / 1000000, output: 10.50 / 1000000 };

    const totalMessages = inputs.monthlyUsers * inputs.messagesPerUser;
    const llmCost = (totalMessages * inputs.avgInputTokens * rates.input) + 
                    (totalMessages * inputs.avgOutputTokens * rates.output);

    // 3. Firestore Cost
    const firestoreCost = (inputs.dbStorageGb * 0.18) + (inputs.documentWrites / 100000 * 0.06);

    // 4. Cloud Storage Cost
    const storageCost = inputs.cloudStorageGb * 0.02;

    return {
      computeCost,
      llmCost,
      firestoreCost,
      storageCost,
      totalCost: computeCost + llmCost + firestoreCost + storageCost
    };
  }
}