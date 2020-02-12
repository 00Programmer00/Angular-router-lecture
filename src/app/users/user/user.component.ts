import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userList } from '../../data/users';
import {Location} from '@angular/common';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = {};
  showSpinner = true;
  constructor(
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  back() {
    this._location.back()
  }

  ngOnInit(): void {
    console.log(this.route);
    const id = this.route.snapshot.paramMap.get('id');
    setTimeout(() => {
      // @ts-ignore
      this.user = userList[id - 1];
      this.showSpinner = false;
    }, 3000);
  }

}
