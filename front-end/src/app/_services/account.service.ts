import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Account } from '../_models/account';
import { ErrorInterceptor } from '../_interceptors/error.interceptor';


@Injectable({
  providedIn: 'root'
})

export class AccountService {


  url="FAKE-CONNECTION-STRING";


  constructor(private http: HttpClient, private errorInterceptor:ErrorInterceptor) { }


  //TODO
  //Complete Unit testing, error handling and JWT before building this service out

  getAccount(account: Account): Observable<Account>{
    
    return this.http.post<Account>(this.url, account);

  }

  


}
