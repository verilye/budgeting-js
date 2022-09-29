import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AccountService {


  url="FAKE-CONNECTION-STRING";


  constructor(private http: HttpClient) { }


  //TODO
  //Update with details from Login component
  //Complete Unit testing, error handling and JWT before building this service out

  getAccount(email:string,password:string){
    
    return this.http.get(this.url);

  };


}
