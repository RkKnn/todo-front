import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from "./heroes/heroes.component";
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'sample', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
