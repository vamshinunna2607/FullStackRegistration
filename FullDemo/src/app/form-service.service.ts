import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  //data; 
  // console.log(data);
   
   private baseUrl:string='http://localhost:8080/users';
  // private headers = new Headers({'Context-Type':'application/json'});
  // private options = new RequestOptions({headers:this.headers});
  constructor(private http:Http) { }

  // getUser(id:string){
  //   return this._http.get(this.baseUrl+id,this.options)
  //   .map((response:Response)=>response.json())
  //   }

  // createUser(data,id:string)
  // {
  //   return this._http.post(this.baseUrl+id,JSON.stringify(data),this.options)
  //   .map((response:Response)=>response.json())
  // }

  create(form){
  
    
  }
  
}
