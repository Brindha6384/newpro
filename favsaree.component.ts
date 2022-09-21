import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SareeserviceService } from '../sareeservice.service';

@Component({
  selector: 'app-favsaree',
  templateUrl: './favsaree.component.html',
  styleUrls: ['./favsaree.component.css']
})
export class FavsareeComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:SareeserviceService) { }
  getMenuId:any;
  satData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.satData =  this.service.sareeDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.satData,'sondata>>');
        
    }
  }

}
