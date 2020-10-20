import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { FeelingSliderComponent } from './feeling-slider/feeling-slider.component';
import { FluidDrainComponent } from './fluid-drain/fluid-drain.component';
import { ScaleAnswerComponent } from './scale-answer/scale-answer.component';
import { ScaleScreenComponent } from './scale-screen/scale-screen.component';
import { SurveyStartComponent } from './survey-start/survey-start.component';
import { TestComponent } from './test/test.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestLoginComponent } from './test-login/test-login.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    ContactScreenComponent,
    FeelingSliderComponent,
    FluidDrainComponent,
    ScaleAnswerComponent,
    ScaleScreenComponent,
    SurveyStartComponent,
    TestComponent,
    TestHomeComponent,
    TestLoginComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
