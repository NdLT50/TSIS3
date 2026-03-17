export interface CalculationInputs {
  monthlyUsers: number;
  messagesPerUser: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  invocations: number;
  executionTimeMs: number;
  memoryMb: number;
  dbStorageGb: number;
  documentWrites: number;
  cloudStorageGb: number;
  model: 'flash' | 'pro';
}

export interface CalculationResults {
  computeCost: number;
  llmCost: number;
  firestoreCost: number;
  storageCost: number;
  totalCost: number;
}