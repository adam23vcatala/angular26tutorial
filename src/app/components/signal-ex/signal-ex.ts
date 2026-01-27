import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstName: String = "Víctor";
  courseName = signal<string>('Angular 20 Learning Partner');
  courseDuration = signal("15 Videos");
  courseDetails = computed(() => this.courseName() + " " + this.courseDuration());
  constructor() {
    setTimeout(() => {
      this.courseName.set("React");
    }, 5000);
  }
}
