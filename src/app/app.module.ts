import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { TestComponent } from './test/test.component';
import { ScaleAnswerComponent } from './scale-answer/scale-answer.component';
import { ScaleScreenComponent } from './scale-screen/scale-screen.component';
import { FluidDrainComponent } from './fluid-drain/fluid-drain.component';
import { FeelingSliderComponent } from './feeling-slider/feeling-slider.component';
import { SurveyStartComponent } from './survey-start/survey-start.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TestHomeComponent,
    TestLoginComponent,
    TestComponent,
    ScaleAnswerComponent,
    ScaleScreenComponent,
    FluidDrainComponent,
    FeelingSliderComponent,
    SurveyStartComponent,
    ContactScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
