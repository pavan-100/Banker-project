import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-meet-team',
  templateUrl: './meet-team.component.html',
  styleUrls: ['./meet-team.component.css']
})
export class MeetTeamComponent implements OnInit {
content: any[];
  constructor(private _meetService: TeamService)  {
    this.content =_meetService.getConstent();
   }

  ngOnInit() {
  }

}
