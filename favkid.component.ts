import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KidserviceService } from '../kidservice.service';

@Component({
  selector: 'app-favkid',
  templateUrl: './favkid.component.html',
  styleUrls: ['./favkid.component.css']
})
export class FavkidComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:KidserviceService) { }
  getMenuId:any;
  samData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.samData =  this.service. kidsDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.samData,'sondata>>');
        
    }
  }

}
