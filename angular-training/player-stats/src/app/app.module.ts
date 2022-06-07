import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerStatsListComponent } from './player-stats-list/player-stats-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
