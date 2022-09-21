import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WestserviceService } from '../westservice.service';

@Component({
  selector: 'app-wsbuynow',
  templateUrl: './wsbuynow.component.html',
  styleUrls: ['./wsbuynow.component.css']
})
export class WsbuynowComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:WestserviceService) { }
  getMenuId:any;
  appData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.appData =  this.service.westDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.appData,'appdata>>');
        
    }
  }

}
