import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroesComponent } from "./heroes/heroes.component";
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
