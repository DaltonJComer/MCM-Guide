import { WatchListsComponent } from './watch-lists/watch-lists.component';
import { ListComponent } from './list/list.component';
import {CharacterDetailsComponent} from './character-details/character-details.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'watchLists', component: WatchListsComponent},
  {path: 'character-details', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
