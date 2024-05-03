import {Component, OnInit} from '@angular/core';
import {DataService} from "../breed-page/breed-page.component";
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-image',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent
  ],
  templateUrl: './dialog-image.component.html',
  styleUrl: './dialog-image.component.css'
})
export class DialogImageComponent implements OnInit{

  dataImage : any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataImage = this.dataService.getData();
  }
}
