import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.entity';
import { UserStatusDropdownComponent } from '../user-status-dropdown/user-status-dropdown.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(UserStatusDropdownComponent) userDropdown: any;

  users: User[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList(){
    this.userService.fetchAllUsersList().subscribe({
      next: (data)=>{this.users = data},
      error: (err)=>{
      console.log(err);
      this.generateUserListData();
    },
      complete: ()=>{}
    })
  }


  //optional
  generateUserListData(){
    this.users = [
    {"id":1,"name":"Faysal Ahmad","status":{"id":1,"activeStatus":"ACTIVE","color":"#4287f5"}},
    {"id":2,"name":"Imran Khan","status":{"id":3,"activeStatus":"OFFLINE","color":"#c4c4c4"}},
    {"id":3,"name":"Akhter Hosain","status":{"id":3,"activeStatus":"OFFLINE","color":"#c4c4c4"}},
    {"id":4,"name":"Jannat Alam","status":{"id":4,"activeStatus":"MEETING","color":"#ed522b"}}
  ];
  }
  receiveMessage($event:any) {
    console.log("data changed");
    console.log($event.body);
    this.users = JSON.parse($event.body); 
  }

}


export interface Friend {
  name: string;
  status: string;
}