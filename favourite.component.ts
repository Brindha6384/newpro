import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KurthiserviceService } from '../kurthiservice.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:KurthiserviceService) { }
  getMenuId:any;
  sonData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.sonData =  this.service.imgDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.sonData,'sondata>>');
        
    }
  }

}
