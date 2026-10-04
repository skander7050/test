import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  count = 0;
  counts = signal(0);
  icrement1() {
    this.count++;
  } 


  icrement() {
    
    this.counts.update(v => v + 1);
  }
}
