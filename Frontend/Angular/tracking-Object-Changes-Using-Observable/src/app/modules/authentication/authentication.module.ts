import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
