import { Component, OnInit } from '@angular/core';
import { StatusList, User } from 'src/app/shared/models/user.entity';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-status-dropdown',
  templateUrl: './user-status-dropdown.component.html',
  styleUrls: ['./user-status-dropdown.component.scss']
})
export class UserStatusDropdownComponent implements OnInit {
  user: User = new User();
  activeStatus:string = "Active";
  // selected:string;
  color:string = "#4287f5";
  statusList:any[] =[];
  // userId: any;
  constructor(private userService:UserService ) { 
    this.user.id = 1;  }

  ngOnInit(): void {
    
    this.fetchUserDetails();
    this.fetchStatusList();
  }

  fetchUserDetails(){
    let params:  Map<string,any> = new Map();
    params.set("id",this.user.id);
    this.userService.fetchUserDetailsById(params).subscribe({
      next: (data)=>{
        if(data){
          this.user = data;
          this.activeStatus= data.status.activeStatus;
        }
      },
      error:(err)=>{
        console.log('HTTP Error', err)
        this.user.name ="Faysal Ahmad";
        this.user.status.activeStatus = StatusList.ACTIVE;
        this.activeStatus= "Active"; 
      },
      complete: () => console.info('complete')

    })
  }
  fetchStatusList(){
    this.userService.fetchAllStatus().subscribe({
      next: (data)=>{
          if(data){
      this.statusList = data.content;
    }
      },
      error: (err)=>{
          this.statusList = [
      {label:"Active",value:StatusList.ACTIVE},
      {label:"Busy",value:StatusList.BUSY},
      {label:"Offline",value:StatusList.OFFLINE},
    ]
      },
      complete: () => console.info('complete')
    
     
    })
  }

  changeStatus(){
    console.log(this.activeStatus);
    switch (this.activeStatus) {
      case 'Active':
        this.color = '#4287f5';
        break;
      case 'Busy':
        this.color = '#f20707';
        break;
      case 'Offline':
        this.color = '#c4c4c4';
        break;
    }
    let params:  Map<string,any> = new Map();
    this.user.status.activeStatus = this.activeStatus;
    params.set("user",this.user);
    console.log("status changed to "+ this.activeStatus);
    this.userService.changeActiveStatusByUserId(params).subscribe((data)=>{
      console.log(data);
    })
  }
}
