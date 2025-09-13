import { Injectable } from '@angular/core';
import { type InvestmentInputParams } from './investment.model';
import { type InvestmentOutputParams } from './investment.model';
@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  // Use the below code as a help
  // e.g., integrate it into a service or component
  // You may need to tweak it, depending on where and how you use it
  private resultData?: InvestmentOutputParams[] = [];

  getAnnualData() {
    return this.resultData;
  }

  calculateInvestmentResults(investment: InvestmentInputParams) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      investment;

    const annualData = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultData = annualData;
  }
}
