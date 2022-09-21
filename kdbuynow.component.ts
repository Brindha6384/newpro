import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KidserviceService } from '../kidservice.service';

@Component({
  selector: 'app-kdbuynow',
  templateUrl: './kdbuynow.component.html',
  styleUrls: ['./kdbuynow.component.css']
})
export class KdbuynowComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:KidserviceService) { }
  getMenuId:any;
  sideData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.sideData =  this.service.kidsDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.sideData,'sidedata>>');
        
    }
  }

}
