import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-lib',
  template: ` <p>shared-lib works!</p> `,
  styles: [],
  standalone: false,
})
export class SharedLibComponent {
  constructor() {}
}
