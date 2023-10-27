import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    this.http.get('http://localhost:4000/usuario').subscribe(data => {
      console.log(data);
    });
  }
  
  register(email: string, password: string,): Observable<any> {
    const data = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}

