import { Component } from '@angular/core';
import {BreedListComponent} from "../breed-list/breed-list.component";



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BreedListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
