// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-landing',
//   imports: [],
//   templateUrl: './landing.component.html',
//   styleUrl: './landing.component.css'
// })
// export class LandingComponent {

// }



// import { Component} from '@angular/core';
// import { RouterOutlet } from '@angular/router'; 
// import { WallpaperComponent } from '../../wallpaper/wallpaper.component';
// import { HeadingComponent } from '../../heading/heading.component';
// // import { NavbarComponent } from '../../navbar/navbar.component';
// import { FlashcardComponent } from '../../flashcard/flashcard.component';


// @Component({
//   selector: 'app-landing',
//   standalone:true,
//   imports:[RouterOutlet
//     ,HeadingComponent,FlashcardComponent], 
//   templateUrl: './landing.component.html',
//   styleUrls: ['./landing.component.css']
// })
// export class landingComponent {}
  



import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../../heading/heading.component';
import { FlashcardComponent } from '../../flashcard/flashcard.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeadingComponent,
    FlashcardComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  puns: string[] = [
    'You are seeing a demo version of this website.',
    'Full Project repository along with integrated api and model is available at github.',
    'VISIT https://github.com/Aditya-hubs for more info.',
    'Have a nice day!'
  ];
}
