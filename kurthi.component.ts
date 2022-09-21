import { Component, OnInit } from '@angular/core';
import { KurthiserviceService } from '../kurthiservice.service';

@Component({
  selector: 'app-kurthi',
  templateUrl: './kurthi.component.html',
  styleUrls: ['./kurthi.component.css']
})
export class KurthiComponent implements OnInit {

  constructor(private service:KurthiserviceService) { }
  kurthiData:any; 
  ngOnInit(): void {
    this. kurthiData= this.service.imgDetails;
  }

}
