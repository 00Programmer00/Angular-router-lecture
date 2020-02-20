import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<JSON>(`${this.baseUrl}/users`);
  }

  get(id: number) {
    return this.httpClient.get<JSON>(`${this.baseUrl}/users/${id}`);
  }
}
