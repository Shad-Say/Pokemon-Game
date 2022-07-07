import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000';

  getUsers(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
}
