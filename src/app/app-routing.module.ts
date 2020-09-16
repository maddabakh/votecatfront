import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteComponent } from './vote/vote.component';
import { RankingComponent } from './ranking/ranking.component';


//Define component routing
const routes: Routes = [
  { path: '', component: VoteComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
