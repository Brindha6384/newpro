import { Component, OnInit } from '@angular/core';
import { KidserviceService } from '../kidservice.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor(private service:KidserviceService) { }
kidData:any;
  ngOnInit(): void {

    this.  kidData = this.service.kidsDetails;
  }


}