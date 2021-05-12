import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ListComponent} from './list/list.component';
import { WatchListsComponent } from './watch-lists/watch-lists.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { BingeCalculatorComponent } from './binge-calculator/binge-calculator.component';
import { SuperheroLandingComponent } from './superhero-landing/superhero-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WatchListsComponent,
    CharacterDetailsComponent,
    BingeCalculatorComponent,
    SuperheroLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
