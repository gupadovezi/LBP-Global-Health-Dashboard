import { GlobalBurdenData, ImagingData, CostData, FactorData, LeadingCauseData } from './types';

// Data derived from Figure 3 (Approximate values from chart) & Text
export const BURDEN_DATA: GlobalBurdenData[] = [
  { ageGroup: '5-9', daly1990: 200000, daly2015: 300000 },
  { ageGroup: '10-14', daly1990: 1000000, daly2015: 1300000 },
  { ageGroup: '15-19', daly1990: 2200000, daly2015: 2500000 },
  { ageGroup: '20-24', daly1990: 3000000, daly2015: 3400000 },
  { ageGroup: '25-29', daly1990: 3400000, daly2015: 4400000 },
  { ageGroup: '30-34', daly1990: 3800000, daly2015: 5000000 },
  { ageGroup: '35-39', daly1990: 3900000, daly2015: 5200000 },
  { ageGroup: '40-44', daly1990: 3500000, daly2015: 5600000 },
  { ageGroup: '45-49', daly1990: 3200000, daly2015: 6000000 },
  { ageGroup: '50-54', daly1990: 3200000, daly2015: 5700000 },
  { ageGroup: '55-59', daly1990: 3100000, daly2015: 5200000 },
  { ageGroup: '60-64', daly1990: 2900000, daly2015: 5000000 },
  { ageGroup: '65-69', daly1990: 2300000, daly2015: 3500000 },
  { ageGroup: '70-74', daly1990: 1700000, daly2015: 3000000 },
  { ageGroup: '75-79', daly1990: 1300000, daly2015: 2200000 },
];

// Data from Brinjikji et al. (2015) - AJNR Am J Neuroradiol
// Systematic Literature Review of Imaging Features of Spinal Degeneration in Asymptomatic Populations
// Data specifically for 50-year-olds
export const IMAGING_DATA: ImagingData[] = [
  { finding: 'Disc Degeneration', asymptomatic: 80, oddsRatio: 1.2 }, 
  { finding: 'Disc Bulge', asymptomatic: 60, oddsRatio: 1.8 },
  { finding: 'Disc Protrusion', asymptomatic: 36, oddsRatio: 2.1 },
  { finding: 'Annular Fissure', asymptomatic: 19, oddsRatio: 1.9 },
  { finding: 'Facet Degeneration', asymptomatic: 32, oddsRatio: 1.5 },
  { finding: 'Spondylolysis', asymptomatic: 6, oddsRatio: 3.2 },
];

// Data from Table S1: Cost estimates adjusted to 2015 USD
// Added Brazil (Estimates based on middle-income country trends: lower direct, high indirect)
export const COST_DATA: CostData[] = [
  { country: 'Australia', totalCostPerPerson: 583, directCost: 64, indirectCost: 518 },
  { country: 'UK', totalCostPerPerson: 449, directCost: 68, indirectCost: 381 },
  { country: 'Sweden', totalCostPerPerson: 336, directCost: 54, indirectCost: 282 },
  { country: 'USA', totalCostPerPerson: 308, directCost: 145, indirectCost: 163 },
  { country: 'Netherlands', totalCostPerPerson: 300, directCost: 36, indirectCost: 264 },
  { country: 'Belgium', totalCostPerPerson: 189, directCost: 30, indirectCost: 159 },
  { country: 'Brazil', totalCostPerPerson: 120, directCost: 25, indirectCost: 95 }, 
];

// Source: WHO Global Health Estimates (Approximate DALYs in Millions for context)
// Comparing LBP to major killers/disablers
export const WHO_LEADING_CAUSES: LeadingCauseData[] = [
  { cause: 'Neonatal conditions', dalys: 186, highlight: false },
  { cause: 'Ischaemic heart disease', dalys: 182, highlight: false },
  { cause: 'Stroke', dalys: 102, highlight: false },
  { cause: 'Lower respiratory infect.', dalys: 91, highlight: false },
  { cause: 'Diarrhoeal diseases', dalys: 81, highlight: false },
  { cause: 'COPD', dalys: 73, highlight: false },
  { cause: 'Low Back Pain', dalys: 65, highlight: true }, // Highlighted for comparison
  { cause: 'Road injury', dalys: 63, highlight: false },
  { cause: 'Diabetes mellitus', dalys: 55, highlight: false },
];

// Data sourced from Brazil 2021 chart (DALYs per 100,000 population)
export const BRAZIL_LEADING_CAUSES: LeadingCauseData[] = [
  { cause: 'COVID-19', dalys: 7600, highlight: false },
  { cause: 'Interpersonal violence', dalys: 3650, highlight: false },
  { cause: 'Ischaemic heart disease', dalys: 2400, highlight: false },
  { cause: 'Road injury', dalys: 1600, highlight: false },
  { cause: 'Stroke', dalys: 1500, highlight: false },
  { cause: 'Diabetes mellitus', dalys: 1250, highlight: false },
  { cause: 'Back and neck pain', dalys: 1180, highlight: true }, // Highlighted
  { cause: 'Lower respiratory infect.', dalys: 950, highlight: false },
  { cause: 'Falls', dalys: 820, highlight: false },
  { cause: 'Anxiety disorders', dalys: 800, highlight: false },
];

export const RISK_FACTORS: FactorData[] = [
  { subject: 'Biophysical', A: 80, fullMark: 100 },
  { subject: 'Psychological', A: 90, fullMark: 100 },
  { subject: 'Social', A: 85, fullMark: 100 },
  { subject: 'Comorbidities', A: 70, fullMark: 100 },
  { subject: 'Genetics', A: 50, fullMark: 100 },
  { subject: 'Pain Processing', A: 65, fullMark: 100 },
];

export const KPIS = [
  { 
    label: "Global DALYs (2015)", 
    value: "60.1 Million", 
    trend: "+54% since 1990", 
    desc: "Disability-Adjusted Life Years",
    color: "bg-blue-100 text-blue-800"
  },
  { 
    label: "Global Prevalence", 
    value: "540 Million", 
    trend: "7.3% Point Prevalence", 
    desc: "People affected at any one time",
    color: "bg-teal-100 text-teal-800"
  },
  { 
    label: "Imaging Specificity", 
    value: "Very Low", 
    trend: "80% Asymptomatic", 
    desc: "Healthy 50yo with disc degen.",
    color: "bg-rose-100 text-rose-800"
  },
  { 
    label: "Indirect Costs", 
    value: "80-90%", 
    trend: "Of Total Costs", 
    desc: "Wage replacement & productivity",
    color: "bg-amber-100 text-amber-800"
  }
];