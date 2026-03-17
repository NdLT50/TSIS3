import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from '../input-form/input-form.component';
import { ResultsPanelComponent } from '../results-panel/results-panel.component';
import { PricingEngineService } from '../../services/pricing-engine.service';

@Component({
  selector: 'app-chat-shell',
  standalone: true,
  imports: [CommonModule, InputFormComponent, ResultsPanelComponent],
  template: `
    <div class="container">
      <h1>CFO Bot Cost Calculator</h1>
      <p style="text-align: center; color: #666; margin-top: -10px; margin-bottom: 25px;">
        Estimate your Google Cloud & Gemini monthly expenses
      </p>
      
      <app-input-form (calculate)="onCalculate($event)"></app-input-form>
      
      <app-results-panel [results]="results"></app-results-panel>
    </div>
  `
})
export class ChatShellComponent {
  results: any = null;

  constructor(private engine: PricingEngineService) {}

  onCalculate(data: any) {
    this.results = this.engine.calculate(data);
  }
}