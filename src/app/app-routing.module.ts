import { WatchListsComponent } from './watch-lists/watch-lists.component';
import {SuperheroLandingComponent} from './superhero-landing/superhero-landing.component';
import { ListComponent } from './list/list.component';
import {CharacterDetailsComponent} from './character-details/character-details.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingeCalculatorComponent } from './binge-calculator/binge-calculator.component';

const routes: Routes = [
  {path: '', redirectTo:'landing', pathMatch: "full"},
  {path:'landing',component: SuperheroLandingComponent},
  {path: 'list', component: ListComponent},
  {path: 'watchLists', component: WatchListsComponent},
  {path: 'character-details', component: CharacterDetailsComponent},
  {path: 'bingeCalculator', component: BingeCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
