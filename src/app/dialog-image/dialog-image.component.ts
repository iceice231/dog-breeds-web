import {Component, OnInit} from '@angular/core';
import {DataService} from "../breed-page/breed-page.component";

@Component({
  selector: 'app-dialog-image',
  standalone: true,
  imports: [],
  templateUrl: './dialog-image.component.html',
  styleUrl: './dialog-image.component.css'
})
export class DialogImageComponent implements OnInit{

  dataImg : any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataImg = this.dataService.getData();
    console.log(this.dataImg)
  }
}
