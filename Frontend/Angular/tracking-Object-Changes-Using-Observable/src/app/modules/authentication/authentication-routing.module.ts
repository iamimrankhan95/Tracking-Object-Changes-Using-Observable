import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{
  path: '', component: AuthenticationComponent, children: [
    {
      path: '', component: SignInComponent, children: []
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
