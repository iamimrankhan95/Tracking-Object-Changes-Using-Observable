import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStatusDropdownComponent } from './user-status-dropdown/user-status-dropdown.component';
import { LoggedUserStatusComponent } from './logged-user-status/logged-user-status.component';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserStatusDropdownComponent,
    LoggedUserStatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialExampleModule
  ]
})
export class UserModule { }
