import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStatusDropdownComponent } from './user-status-dropdown/user-status-dropdown.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserStatusDropdownComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
