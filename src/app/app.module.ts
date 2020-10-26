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
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IpcComponent } from './pages/ipc/ipc.component';
import { TestFooterComponent } from './test-footer/test-footer.component';
import { AppRoutingModule } from './app-routing.module';

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
    TopbarComponent,
    IpcComponent,
    TestFooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path: 'home',
      component: DashboardComponent
    },
    {
      path: 'contact',
      component: ContactScreenComponent
    },
    {
      path: 'ipc',
      component: IpcComponent
    },
    {
      path: '',
      component: TestLoginComponent
    },
    { path: 'scaletest', component: ScaleScreenComponent },
    { path: 'fluidtest', component: FluidDrainComponent },
    { path: 'feelingtest', component: FeelingSliderComponent },
    { path: 'surveyhometest', component: SurveyStartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
