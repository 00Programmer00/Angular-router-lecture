import { Component, OnInit } from '@angular/core';
import { userList } from '../data/users';
import { UserService } from './users.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  showSpinner = true;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.users = data;
      this.showSpinner = false;
    });
  }

}
