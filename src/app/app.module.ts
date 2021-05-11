import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';
import { WatchListsComponent } from './watch-lists/watch-lists.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
<<<<<<< HEAD
import { LandingPageComponent } from './landing-page/landing-page.component';
=======
import { BingeCalculatorComponent } from './binge-calculator/binge-calculator.component';
>>>>>>> 001f8010d03f2f93feb8ce38efef7a5019ed09ca

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WatchListsComponent,
    CharacterDetailsComponent,
<<<<<<< HEAD
    LandingPageComponent
=======
    BingeCalculatorComponent
>>>>>>> 001f8010d03f2f93feb8ce38efef7a5019ed09ca
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
