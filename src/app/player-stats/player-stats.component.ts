import { IDetails } from './../commons/common';
import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  public players:IDetails[];
  public playerService:PlayerService;
  public route:ActivatedRoute;
  matchedPlayer:any;
  constructor(route:ActivatedRoute,playerService:PlayerService) {
    this.players=playerService.players;
    this.playerService=playerService;
    this.route=route;
   }

  ngOnInit(): void {
    this.matchedPlayer=this.playerService.getPlayer(this.route.snapshot.params['id']);
    console.log(this.matchedPlayer)
  }

}
