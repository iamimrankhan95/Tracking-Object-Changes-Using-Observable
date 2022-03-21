import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status, StatusList, User } from 'src/app/shared/models/user.entity';
import { UserService } from '../user.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as Jquery from 'jquery';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user-status-dropdown',
  templateUrl: './user-status-dropdown.component.html',
  styleUrls: ['./user-status-dropdown.component.scss'],
})
export class UserStatusDropdownComponent implements OnInit {
  user: User = new User();
  id!:any;
  @Output() messageEvent:any = new EventEmitter<User>();
  activeStatus: Status = new Status() ;
  color: string = '#4287f5';
  statusList: Status[] = [];
  private serverUrl = 'http://localhost:8080/socket'
  private title = 'WebSockets chat';
  private stompClient!:any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute) {
    this.user.id = 2;
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get("id");
    this.fetchUserDetails();
    this.fetchStatusList();
    this.initializeWebSocketConnection();
  }
  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame:any) {
      that.stompClient.subscribe("/topic/public", (data:any) => {
        if(data) {
          // $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log("response from server" + data);
          that.messageEvent.emit(data);
        }
      });
    });
  }
  fetchUserDetails() {
    let params: Map<string, any> = new Map();
    params.set('id', this.id);
    this.userService.fetchUserDetailsById(params).subscribe({
      next: (data) => {
        if (data) {
          console.log('data from server' + data);
          this.user = data;
          this.activeStatus = data.status;
        }
      },
      error: (err) => {
        console.log('HTTP Error', err);
        this.user.name = 'Faysal Ahmad';
        this.user.status.activeStatus = StatusList.ACTIVE;
      },
      complete: () => console.info('complete'),
    });
  }
  fetchStatusList() {
    this.userService.fetchAllStatus().subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.statusList = data;
        }
      },
      error: (err) => {
        this.statusList = [
    {
      "id": 1,
      "activeStatus": "ACTIVE",
      "color": "#4287f5"
  },
  {
      "id": 2,
      "activeStatus": "BUSY",
      "color": "#f20707"
  },
  {
      "id": 3,
      "activeStatus": "OFFLINE",
      "color": "#c4c4c4"
  },
  {
      "id": 4,
      "activeStatus": "MEETING",
      "color": "#ed522b"
  }
]
      },
      complete: () => console.info('complete'),
    });
  }

  changeStatus() {
    console.log(this.activeStatus);
    this.activeStatus = this.user.status;
    let params: Map<string, any> = new Map();
    params.set('user', this.user);
    console.log('status changed to ' + this.activeStatus);
    this.userService.changeActiveStatusByUserId(params).subscribe({
      next:(data) => {console.log( "change status"+ data);
      this.stompClient.send("/app/hello", {}, JSON.stringify(data));
    },
    error: (err)=>{console.log("Error occured "+err)},
    complete:()=>{}
  });
   
  }
}
