import { Component } from '@angular/core';
import { ChatShellComponent } from './components/chat-shell/chat-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatShellComponent],
  template: `<app-chat-shell></app-chat-shell>`
})
export class App {}