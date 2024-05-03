import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'dog-breeds-web';

}
