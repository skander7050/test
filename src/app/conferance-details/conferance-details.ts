import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  id = input.required<string>();

  conferances = [
    { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
    { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
    { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' },
  ];

  conference = signal<any>(null);

  constructor() {
    effect(() => {
      const selectedId = Number(this.id());
      const found = this.conferances.find((c) => c.id === selectedId);
      this.conference.set(found ?? null);
    });
  }
}
