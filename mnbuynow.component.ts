import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenserviceService } from '../menservice.service';


@Component({
  selector: 'app-mnbuynow',
  templateUrl: './mnbuynow.component.html',
  styleUrls: ['./mnbuynow.component.css']
})
export class MnbuynowComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:MenserviceService) { }
  getMenuId:any;
  oppData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.oppData =  this.service.mensDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.oppData,'oppdata>>');
        
    }
  }

}
