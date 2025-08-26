import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: false,
})
export class FavoritesComponent {
  imageHeight: string = '75vh';
  urlImage: string = '/images/';
}
