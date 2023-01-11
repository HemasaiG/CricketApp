import { Injectable } from '@angular/core';
import { IDetails } from './commons/common';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player:any
  constructor() { }



  public players: IDetails[]=[{
    id:1,
    name:"Virat Kohli",
    country:"India",
    born:"05/09/1988",
    role:"Batsman",
    iplTeam:"Royal Challengers Banglore",
    stats:{
      battingStats:{
        matches:102,
        innings:173,
        runs:8074,
        balls:14499,
        highest:254,
        notouts:10,
        average:49.53,
        sr:55.69
      }
    }
  },{
    id:2,
    name:"Rohit Sharma",
    country:"India",
    born:"30/04/1987",
    role:"Batsman",
    iplTeam:"Mumbai Indians",
    stats:{
      battingStats:{
        matches:45,
        innings:77,
        runs:3137,
        balls:5625,
        highest:212,
        notouts:9,
        average:46.13,
        sr:55.77
      }
    }
  },{
    id:3,
    name:"Joe Root",
    country:"England",
    born:"30/12/1990",
    role:"Batsman",
    iplTeam:null,
    stats:{
      battingStats:{
        matches:124,
        innings:228,
        runs:10504,
        balls:18935,
        highest:254,
        notouts:18,
        average:50.02,
        sr:55.47
      }
    }
  },{
    id:4,
    name:"Pat Cummins",
    country:"Australia",
    born:"08/05/1993",
    role:"Bowler",
    iplTeam:"Kolkata Knight Riders",
    stats:{
      battingStats:{
        matches:43,
        innings:61,
        runs:880,
        balls:2156,
        highest:63,
        notouts:9,
        average:16.92,
        sr:40.82
      }
    }
  },{
    id:5,
    name:"Trent Boult",
    country:"NewZealand",
    born:"22/07/1988",
    role:"Bowler",
    iplTeam:"Rajasthan Royals",
    stats:{
      battingStats:{
        matches:78,
        innings:94,
        runs:759,
        balls:1264,
        highest:52,
        notouts:46,
        average:15.81,
        sr:60.05
      }
    }
  },{
    id:6,
    name:"Rishab Pant",
    country:"India",
    born:"04/10/1997",
    role:"WK-Batsman",
    iplTeam:"Delhi Capitals",
    stats:{
      battingStats:{
        matches:31,
        innings:53,
        runs:2123,
        balls:2922,
        highest:1159,
        notouts:4,
        average:43.33,
        sr:72.66
      }
    }
  }];

  getPlayer(id:number){
    return this.players.find((player)=>{
      return player.id == id;
    })

  }
}
