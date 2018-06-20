import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {FormServiceService} from '.././form-service.service'
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  formdata;
  searchEmail;
  constructor(private myservice: FormServiceService, private http:Http) { }

  ngOnInit() {
    
  this.createForm();

}
createForm(){
  this.formdata = new FormGroup({
    firstName : new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    gender: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
});
}

createUser(form)
{
  
  let url ='http://localhost:8080/users/nunna@gmail.com';
  this.http.post(url,{firstName:form.firstName,
  lastName:form.lastName, gender:form.gender,email:form.email
  ,password:form.password})
  // .catch(this.errorHandler)
  .subscribe();
  // this.createForm();
}

private errorHandler(error: Response)
{
  console.error(error);
  return Observable.throw(error || 'Some error')
}

getUsers(){
  let url ='http://localhost:8080/users/';
  this.http.get(url+this.searchEmail)
  // .catch(this.errorHandler)
  .subscribe(res => console.log(res.json()));
}
}
