import { Component, inject } from '@angular/core';
import { InvestmentService } from './investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  get calculated() {
    return this.investmentService.getAnnualData();
  }
}
