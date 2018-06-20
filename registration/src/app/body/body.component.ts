import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule,Router} from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import {FormServiceService} from '.././form-service.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  formdata;
  buttonStatus=true;
  constructor(private router: Router,private myservice: FormServiceService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      firstName : new FormControl("",[Validators.required,Validators.minLength(3)]),
      middle: new FormControl(""),
      lastName: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      dateOfBirth: new FormControl("",Validators.required),
      nationality: new FormControl("",Validators.required),
      SSN: new FormControl(""),
      maritalStatus: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl("",Validators.required),
      state: new FormControl("",Validators.required),
      zip: new FormControl("",Validators.required),
      landmark: new FormControl(""),
      phone: new FormControl("",Validators.required),
      homeAddress: new FormControl(""),
      mobile: new FormControl(""),
      landLine: new FormControl(""),
      email: new FormControl("",Validators.required)
      
    });
    this.myservice.formObject=this.formdata;
  }
// tabs=["Personal Details","Educational Details","Immigration Details","Work Experience"];
onSubmit(data){
  this.buttonStatus=false;
console.log(data);
}
btnClick(){
  this.router.navigate(['/educational-details']);
}

}
