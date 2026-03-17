import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from '../input-form/input-form.component';
import { ResultsPanelComponent } from '../results-panel/results-panel.component';
import { PricingEngineService } from '../../services/pricing-engine.service';

@Component({
  selector: 'app-chat-shell',
  standalone: true,
  imports: [CommonModule, InputFormComponent, ResultsPanelComponent],
  templateUrl: 'chat-shell.html',
  styleUrl: 'chat-shell.css'
})
export class ChatShellComponent {
  results: any = null;

  constructor(private engine: PricingEngineService) {}

  onCalculate(data: any) {
    this.results = this.engine.calculate(data);
  }
}