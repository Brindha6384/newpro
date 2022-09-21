import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WestserviceService } from '../westservice.service';


@Component({
  selector: 'app-favwest',
  templateUrl: './favwest.component.html',
  styleUrls: ['./favwest.component.css']
})
export class FavwestComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:WestserviceService) { }
  getMenuId:any;
  sabData:any;


  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.sabData =  this.service.westDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.sabData,'sondata>>');
        
    }
  }

}
