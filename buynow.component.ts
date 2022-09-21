import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KurthiserviceService } from '../kurthiservice.service';
@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:KurthiserviceService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.imgDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
  }

}
