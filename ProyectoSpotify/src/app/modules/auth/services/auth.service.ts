import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(private http:HttpClient) { }

  sendPostAuth$(email:string, password:string): Observable<any> {

    const body: {email:string, password:string}= {email,password}

    return this.http.post(`${this.URL}/auth/login`,body)
  } 
}
