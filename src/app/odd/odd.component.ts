import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent {
  @Input() number: number;
}
