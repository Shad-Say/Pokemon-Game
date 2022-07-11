import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000';

  getPokemons = (): Observable<any> => {
    return this.http.get(`${this.baseUrl}/pokemon`);
  };

  createPokemon = (data: any): Observable<any> => {
    return this.http.post(`${this.baseUrl}/pokemon`, data);
  };

  updatePokemon = (data: any, id: string): Observable<any> => {
    return this.http.patch(`${this.baseUrl}/pokemon/${id}`, data);
  };

  deletePokemon = (id: string): Observable<any> => {
    return this.http.delete(`${this.baseUrl}/pokemon/${id}`);
  };

  getToken() {
    return window.localStorage.getItem('token');
  }
}
