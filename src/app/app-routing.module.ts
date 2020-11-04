import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHomeComponent } from './test-home/test-home.component'
import { TestLoginComponent } from './test-login/test-login.component'
import { TestComponent } from './test/test.component'
import { ScaleScreenComponent } from './scale-screen/scale-screen.component'
import { FluidDrainComponent } from './fluid-drain/fluid-drain.component'
import { FeelingSliderComponent } from './feeling-slider/feeling-slider.component'
import { SurveyStartComponent } from './survey-start/survey-start.component'
import { ContactScreenComponent } from './contact-screen/contact-screen.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
      path: 'home',
      component: DashboardComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }