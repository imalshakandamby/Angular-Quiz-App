import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IndexComponent } from './index/index.component';
import { ScoreComponent } from './score/score.component';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IndexComponent,
    ScoreComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:IndexComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
