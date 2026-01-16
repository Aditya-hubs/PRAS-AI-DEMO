

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-flashcard2',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './flashcard2.component.html',
  styleUrl: './flashcard2.component.css'
})
export class Flashcard2Component {
  @Input() title!: string;
  @Input() price!: string;
  @Input() about!: string;
  @Input() link!: string;
  @Input() url!: string;

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
