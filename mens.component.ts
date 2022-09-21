import { Component, OnInit } from '@angular/core';
import { MenserviceService } from '../menservice.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor(private service:MenserviceService) { }
  menData:any; 
  ngOnInit(): void {
    this.menData= this.service.mensDetails;
  }

}
