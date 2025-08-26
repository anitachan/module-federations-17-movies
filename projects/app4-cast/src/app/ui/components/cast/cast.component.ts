import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cast } from 'shared-lib';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
  standalone: false,
})
export class CastComponent {
  urlImage: string = '/images/';

  @Input() cast: Cast[];
  @Output() actor: EventEmitter<string> = new EventEmitter<string>();

  getActor(actor: string) {
    this.actor.emit(actor);
  }
}
