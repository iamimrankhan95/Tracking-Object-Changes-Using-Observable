import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.entity';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = '/topic/greetings';
  stompClient: any;
  users!: User[];
  constructor() {}
  public _connect() {
    console.log('Initialize WebSocket Connection');
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect(
      {},
      function (frame: any) {
        _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
          console.log('connected to the server');
        });
        //_this.stompClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    );
  }
  errorCallBack(error: any) {
    console.log('errorCallBack -> ' + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
}
