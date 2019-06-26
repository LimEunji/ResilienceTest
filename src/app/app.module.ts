import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResilienceTestComponent } from './resilience-test/resilience-test.component';
import { ResultComponent } from './result/result.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';

@NgModule({
  declarations: [
    AppComponent,
    ResilienceTestComponent,
    ResultComponent,
    HallOfFameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
