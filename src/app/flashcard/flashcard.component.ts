import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  imports: [RouterLink],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.css'
})
export class FlashcardComponent {
  @Input() title!: string;
  @Input() about!: string;
  @Input() link!: string;
  @Input() linker!: string;

  // Emit category name
  @Output() cardClick = new EventEmitter<string>();

  onClick() {
    // send category to parent
    this.cardClick.emit(this.title.toLowerCase());
  }
}
