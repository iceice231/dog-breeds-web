
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BreedPageComponent} from "./breed-page/breed-page.component";


export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'breed', component: BreedPageComponent, data: {}}
];



