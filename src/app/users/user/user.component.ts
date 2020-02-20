import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userList } from '../../data/users';
import {Location} from '@angular/common';
import { UserService } from '../users.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = {};
  showSpinner = true;
  constructor(
    private route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _location: Location,
    private service: UserService
  ) {}

  back() {
    this._location.back();
  }

  ngOnInit(): void {
    console.log(this.route);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe(data => {
      console.log('DD2: ', data)
    })
    // setTimeout(() => {
    //   // @ts-ignore
    //   this.user = userList[id - 1];
    //   this.showSpinner = false;
    // }, 3000);
  }

}
