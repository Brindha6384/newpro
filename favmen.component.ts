import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenserviceService } from '../menservice.service';

@Component({
  selector: 'app-favmen',
  templateUrl: './favmen.component.html',
  styleUrls: ['./favmen.component.css']
})
export class FavmenComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:MenserviceService) { }
  getMenuId:any;
  sapData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.sapData =  this.service.mensDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.sapData,'sondata>>');
        
    }
  }

}
