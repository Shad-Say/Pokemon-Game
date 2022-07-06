import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IuserData } from '../models/interface';

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
