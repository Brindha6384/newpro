import { Component, OnInit } from '@angular/core';
import { SareeserviceService } from '../sareeservice.service';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.css']
})
export class SareesComponent implements OnInit {

  constructor(private service:SareeserviceService) { }
  sareeData:any;
  ngOnInit(): void {
    this.sareeData= this.service.sareeDetails;
  }

}
