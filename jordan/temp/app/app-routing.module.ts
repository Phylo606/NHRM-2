import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestHomeComponent} from './test-home/test-home.component'
import {TestLoginComponent} from './test-login/test-login.component'
import {TestComponent} from './test/test.component'

const routes: Routes = [
  { path: 'home', component: TestHomeComponent },
  { path: 'login', component: TestLoginComponent },
  { path: '', component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }