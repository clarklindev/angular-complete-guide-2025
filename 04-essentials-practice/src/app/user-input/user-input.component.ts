import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  private investmentService = inject(InvestmentService);

  onSubmit() {
    console.log('hello');

    // console.log(this.initialInvestment);
    // console.log(this.annualInvestment);
    // console.log(this.expectedReturn);
    // console.log(this.duration);

    this.investmentService.calculateInvestmentResults({
      initialInvestment: parseInt(this.initialInvestment),
      annualInvestment: parseInt(this.annualInvestment),
      expectedReturn: parseInt(this.expectedReturn),
      duration: parseInt(this.duration),
    });
  }
}
