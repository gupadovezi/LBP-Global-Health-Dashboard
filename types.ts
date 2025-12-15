export interface GlobalBurdenData {
  ageGroup: string;
  daly1990: number;
  daly2015: number;
}

export interface ImagingData {
  finding: string;
  asymptomatic: number;
  oddsRatio: number;
}

export interface CostData {
  country: string;
  totalCostPerPerson: number;
  directCost: number;
  indirectCost: number;
}

export interface FactorData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface LeadingCauseData {
  cause: string;
  dalys: number;
  highlight: boolean;
}

export enum TabView {
  OVERVIEW = 'OVERVIEW',
  BURDEN = 'BURDEN',
  DIAGNOSTICS = 'DIAGNOSTICS',
  ECONOMICS = 'ECONOMICS'
}