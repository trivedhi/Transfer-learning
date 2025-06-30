export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string;
  severity: 'Low' | 'Medium' | 'High';
  prevalence: number;
}

export interface ClassificationResult {
  disease: Disease;
  confidence: number;
  timestamp: Date;
}

export interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  result?: ClassificationResult;
  processing: boolean;
}

export interface AnalyticsData {
  totalClassifications: number;
  accuracyRate: number;
  topDiseases: { name: string; count: number }[];
  monthlyStats: { month: string; classifications: number }[];
}