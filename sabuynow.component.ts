import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SareeserviceService } from '../sareeservice.service';

@Component({
  selector: 'app-sabuynow',
  templateUrl: './sabuynow.component.html',
  styleUrls: ['./sabuynow.component.css']
})
export class SabuynowComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:SareeserviceService) { }
  getMenuId:any;
  offData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.offData =  this.service.sareeDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.offData,'offdata>>');
        
    }
  }

}
