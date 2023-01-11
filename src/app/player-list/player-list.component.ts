import { PlayerService } from './../player.service';
import { IDetails } from './../commons/common';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit,OnChanges {
  players:IDetails[];
  @Input() filterBy!: string;
  @Input() sortBy!: string;
  visiblePlayers:IDetails[]=[];
  constructor(private playerService:PlayerService) {
    this.players=playerService.players;
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.filterBy,this.sortBy);
    if(this.players){
      this.filterPlayersByCountry(this.filterBy);
      if (this.sortBy==="name"){
        this.visiblePlayers=this.visiblePlayers.sort(sortByNameAsc);
      }
      else if (this.sortBy==="runs"){
        this.visiblePlayers=this.visiblePlayers.sort(sortByRunsDesc);
      }
      else{
        this.visiblePlayers=this.visiblePlayers.slice(0);
      }
    }

  }

  filterPlayersByCountry(filter:string){
    if(filter==="all"){
      this.visiblePlayers=this.players.slice(0);
      console.log(this.visiblePlayers)
    }
    else{
      this.visiblePlayers=this.players.filter((player)=>{
        return player.country.toLocaleLowerCase()===filter;
      }
      )}
      console.log(this.visiblePlayers)
    }

}

function sortByNameAsc(p1:IDetails,p2:IDetails){
  if(p1.name>p2.name) return 1;
  else if(p1.name===p2.name) return 0;
  else return -1
}

function sortByRunsDesc(p1:IDetails,p2:IDetails){
  if(p2.stats.battingStats.runs>p1.stats.battingStats.runs) return 1;
  else if(p2.stats.battingStats.runs===p1.stats.battingStats.runs) return 0;
  else return -1;
}






