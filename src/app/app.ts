import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ds-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('distributed-system-conflict-debugger');

  private readonly store = inject(Store);

  constructor() {
    this.store.subscribe((data) => console.log(data));
  }
}
