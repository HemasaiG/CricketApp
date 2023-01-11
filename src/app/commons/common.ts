
export interface IDetails{
    id:number,
    name:string,
    country:string,
    born:string,
    role:string,
    iplTeam?:any,
    stats:IStats
}

export interface IStats{
  battingStats:IBattingStats,
}

export interface IBattingStats{
  matches:number,
  innings:number,
  runs:number,
  highest:number,
  balls:number,
  notouts:number,
  average:number,
  sr:number
}


