import { Disease } from '../types';

export const diseases: Disease[] = [
  {
    id: 'newcastle',
    name: 'Newcastle Disease',
    description: 'A highly contagious viral infection affecting the respiratory, nervous, and digestive systems of birds.',
    symptoms: ['Respiratory distress', 'Nervous signs', 'Diarrhea', 'Reduced egg production'],
    treatment: 'Vaccination and supportive care. Quarantine affected birds immediately.',
    severity: 'High',
    prevalence: 15.2
  },
  {
    id: 'avian-flu',
    name: 'Avian Influenza',
    description: 'A viral infection that can range from mild to severe, affecting poultry worldwide.',
    symptoms: ['Sudden death', 'Respiratory symptoms', 'Decreased egg production', 'Facial swelling'],
    treatment: 'Biosecurity measures, vaccination in some cases, and rapid containment.',
    severity: 'High',
    prevalence: 8.7
  },
  {
    id: 'fowl-pox',
    name: 'Fowl Pox',
    description: 'A viral disease causing skin lesions and respiratory symptoms in poultry.',
    symptoms: ['Skin lesions', 'Scabs on comb and wattles', 'Respiratory difficulty', 'Reduced feed intake'],
    treatment: 'Vaccination and supportive care. Remove scabs gently and apply antiseptic.',
    severity: 'Medium',
    prevalence: 12.4
  },
  {
    id: 'coccidiosis',
    name: 'Coccidiosis',
    description: 'A parasitic disease affecting the intestinal tract, common in young birds.',
    symptoms: ['Bloody diarrhea', 'Weakness', 'Poor growth', 'Dehydration'],
    treatment: 'Anticoccidial medications and improved sanitation practices.',
    severity: 'Medium',
    prevalence: 22.1
  },
  {
    id: 'healthy',
    name: 'Healthy',
    description: 'No signs of disease detected. The bird appears to be in good health.',
    symptoms: ['Active behavior', 'Good appetite', 'Normal feather condition', 'Regular egg production'],
    treatment: 'Continue regular health monitoring and maintain good hygiene practices.',
    severity: 'Low',
    prevalence: 41.6
  }
];