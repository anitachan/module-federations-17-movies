import { Component } from '@angular/core';
import { SharedLibModule } from 'shared-lib';

@Component({
  selector: 'app-dashboard',
  imports: [SharedLibModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  urlImage: string = '/images/';
}
