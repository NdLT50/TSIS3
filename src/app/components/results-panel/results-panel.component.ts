import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'results-panel.html',
  styleUrl: 'results-panel.css'
})
export class ResultsPanelComponent {
  @Input() results: any;

  getPercent(value: number): number {
    if (!this.results?.totalCost || this.results.totalCost <= 0) {
      return 0;
    }

    return Math.round((value / this.results.totalCost) * 100);
  }
}