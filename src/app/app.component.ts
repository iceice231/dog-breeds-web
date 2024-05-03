import {Component, NgModule, OnInit} from '@angular/core';
import {RouterOutlet, RouterModule, RouterLink, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {routes} from "./app.routes";




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
export class AppComponent implements OnInit{
  title = 'dog-breeds-web';

  constructor() {
  }
  ngOnInit() {
  }

}
