import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule,Router} from '@angular/router';
@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
  newcomponent = "Entered in new component created";
  constructor(private router:Router) { }


  ngOnInit() {
    this.formdata = new FormGroup({
      mastersGradDate: new FormControl(""),
      mastersMajor:new FormControl(""),
      mastersUniv:new FormControl(""),
      mastersAddress:new FormControl(""),
      mastersGPA:new FormControl(""),
      mastersStartYear:new FormControl(""),
      BachGradDate:new FormControl(""),
      BachMajor:new FormControl(""),
      BachUniversity:new FormControl(""),
      BachAddress:new FormControl(""),
      BachGPA:new FormControl(""),
      BachStartYear:new FormControl(""),
      interGrad: new FormControl(""),
      interMajor:new FormControl(""),
      interUniv:new FormControl("")
})
  }
  formdata;
  onSubmit(data){
    console.log(data);
    }
    btnClick(){
      this.router.navigate(['/body']);
    }
}
