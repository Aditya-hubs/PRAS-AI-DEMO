import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[WallpaperComponent,NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
  