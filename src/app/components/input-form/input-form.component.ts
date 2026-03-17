import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'input-form.html',
  styleUrl: 'input-form.css'
})
export class InputFormComponent {
  @Output() calculate = new EventEmitter<any>();
  costForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.costForm = this.fb.group({
      model: ['flash'],
      monthlyUsers: [1000, [Validators.required, Validators.min(0)]],
      messagesPerUser: [24, [Validators.required, Validators.min(0)]],
      avgInputTokens: [800, [Validators.required, Validators.min(0)]],
      avgOutputTokens: [400, [Validators.required, Validators.min(0)]],
      invocations: [50000, [Validators.required, Validators.min(0)]],
      executionTimeMs: [350, [Validators.required, Validators.min(0)]],
      memoryMb: [256, [Validators.required, Validators.min(128)]],
      dbStorageGb: [10, [Validators.required, Validators.min(0)]],
      documentWrites: [250000, [Validators.required, Validators.min(0)]],
      cloudStorageGb: [50, [Validators.required, Validators.min(0)]]
    });
  }

  showError(controlName: string): boolean {
    const control = this.costForm.get(controlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }

  onSubmit() {
    this.costForm.markAllAsTouched();

    if (this.costForm.valid) {
      this.calculate.emit(this.costForm.value);
    }
  }
}