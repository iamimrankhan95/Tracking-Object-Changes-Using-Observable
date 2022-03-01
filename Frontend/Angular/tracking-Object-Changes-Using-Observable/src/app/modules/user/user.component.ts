import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SignOut() {
    //sign out code
    console.log('sign out hit from parent')
  }
  StatusDropdown() {
    //sign out code
    console.log('status dropdown hit from parent')
  }
}
