import { Component, signal } from '@angular/core';

@Component({
  selector: 'rtc-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('distributed-system-conflict-debugger');
}
