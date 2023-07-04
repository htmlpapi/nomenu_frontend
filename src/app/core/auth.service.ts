import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken(): Observable<boolean>
  {
    const value = sessionStorage.getItem('token');
    if (value) {
      return of(true)
    } else {
      return of(false)
    }
  }
}
