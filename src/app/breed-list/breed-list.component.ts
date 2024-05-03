import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from '@angular/router';

interface IBreed {
  nameBreed: string,
  urlImgBreed: string,
}
@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.css'
})
export class BreedListComponent implements OnInit {

  urlGetAllBreeds = "https://dog.ceo/api/breeds/list/all"

  responseAllBreeds: any;
  responseImagesBreeds: any;

  listBreeds: Array<IBreed> = []

  constructor(private httpClient: HttpClient) {
  }

  async getBreeds() {
    await this.httpClient.get(this.urlGetAllBreeds)
      .subscribe(async (response) => {
        this.responseAllBreeds = response;
        this.responseAllBreeds = this.responseAllBreeds.message;
        for (let key in this.responseAllBreeds){
          if(Array.isArray(this.responseAllBreeds[key])){
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            await this.httpClient.get(`https://dog.ceo/api/breed/${key}/images/random`)
              .subscribe((response) =>{
                this.responseImagesBreeds = response;
                let objBreed : IBreed = {
                  nameBreed: capitalizedKey,
                  urlImgBreed: this.responseImagesBreeds.message,
                }
               this.listBreeds.push(objBreed)
              })
          }
        }
      })
  }
  ngOnInit() {
    this.getBreeds()
  }
}
