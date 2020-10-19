import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
