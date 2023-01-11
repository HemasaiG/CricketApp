import { PlayerService } from './../player.service';
import { IDetails } from './../commons/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  flag:boolean=false;
  @Input() name:any;
  
  constructor() {}

  ngOnInit(): void {
  }

 

  toggleButton(){
    this.flag=!this.flag;
  }

}
