import { IDetails } from './../commons/common';
import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  filterBy:string='all';
  sortBy:string="default";

  constructor() {}

  ngOnInit(): void {
    console.log(this.filterBy)
  }





}
