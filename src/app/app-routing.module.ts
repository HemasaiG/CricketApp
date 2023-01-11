import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { PlayersComponent } from './players/players.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';


const routes: Routes = [
  {path:"add", component:AddPlayerComponent},
  {path:"" ,component:PlayersComponent},
  {path:"stats/:id",component:PlayerStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
