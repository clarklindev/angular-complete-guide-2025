export interface InvestmentInputParams {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
}

export interface InvestmentOutputParams {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
