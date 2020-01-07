import { TokenService } from './../../services/token.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  socket: any;

  user: any;
  notifications = [];

  constructor(private tokenService: TokenService, private usersService: UsersService) {
    this.socket = io('http://192.168.43.253:3000');
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayload();
    this.GetUser();

    this.socket.on('refreshPage', () => {
      this.GetUser();
    });
  }

  GetUser() {
    this.usersService.GetUserById(this.user._id).subscribe(data => {
      this.notifications = data.result.notifications.reverse();
    });
  }

  MarkNotification(data) {
    this.usersService.MarkNotification(data._id).subscribe(value => {
      this.socket.emit('refresh', {});
    });
  }

  DeleteNotification(data) {
    this.usersService.MarkNotification(data._id, true).subscribe(value => {
      this.socket.emit('refresh', {});
    });
  }

  TimeFromNow(time) {
    return moment(time).fromNow();
  }
}
