import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ScoreComponent } from './container/score/score.component';
import { GithubService } from './github.service'; // <-- Imported
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ScoreComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
