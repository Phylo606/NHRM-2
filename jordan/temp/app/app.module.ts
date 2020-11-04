import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TestHomeComponent,
    TestLoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
