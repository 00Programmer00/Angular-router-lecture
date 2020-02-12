import { Component, OnInit } from '@angular/core';
import { userList } from '../data/users';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<object> = userList

  constructor() { }

  ngOnInit(): void {
  }

}
