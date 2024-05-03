import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, RouterLink, RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from "@angular/common";
import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogImageComponent} from "../dialog-image/dialog-image.component";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any;
  setData(data: any) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
}
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private dataService: DataService,
    public dialog: MatDialog
    ) {}

  async getImagesBreed() {
    const nameBreed = this.dataBreed.nameBreed.charAt(0).toLowerCase() + this.dataBreed.nameBreed.slice(1)
    await this.httpClient.get(`https://dog.ceo/api/breed/${nameBreed}/images`)
      .subscribe(async (response) => {
        this.responseImages = response;
        this.responseImages = this.responseImages.message;
      })
  }
  augmentationImage(urlImage : any) {
    this.dataService.setData(urlImage.target.src)
    this.dialog.open(DialogImageComponent)
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.dataBreed = data
    })
    this.getImagesBreed()
  }
}
