import {Component, OnInit, QueryList, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-breed-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './breed-page.component.html',
  styleUrl: './breed-page.component.css'
})
export class BreedPageComponent implements OnInit {
  dataBreed : any;
  responseImages: any;
  // @ts-ignore


  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  async getImagesBreed() {
    const nameBreed = this.dataBreed.nameBreed.charAt(0).toLowerCase() + this.dataBreed.nameBreed.slice(1)
    await this.httpClient.get(`https://dog.ceo/api/breed/${nameBreed}/images`)
      .subscribe(async (response) => {
        this.responseImages = response;
        this.responseImages = this.responseImages.message;
        // console.log(this.imgBreed)
      })
  }

  augmentationImg(imgId : any) {

    const imgBreed = document.getElementById("Affenpinscher0") as HTMLImageElement;
    console.log(document.getElementById("Affenpinscher0"))
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.dataBreed = data
    })
    this.getImagesBreed()

    const imgBreed = document.getElementById("Affenpinscher0");
    console.log(imgBreed)


  }

}
