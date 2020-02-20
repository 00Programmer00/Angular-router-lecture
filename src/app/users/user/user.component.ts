import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
      this.user = data;
      this.showSpinner = false;
    });
  }

}
