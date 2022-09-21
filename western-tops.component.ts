import { Component, OnInit } from '@angular/core';
import { WestserviceService } from '../westservice.service';

@Component({
  selector: 'app-western-tops',
  templateUrl: './western-tops.component.html',
  styleUrls: ['./western-tops.component.css']
})
export class WesternTopsComponent implements OnInit {

  constructor(private service:WestserviceService) { }
  westData:any;
  ngOnInit(): void {
    this.  westData = this.service.westDetails;
  }

}
