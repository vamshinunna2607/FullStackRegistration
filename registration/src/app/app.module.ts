import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule,Router} from '@angular/router';
import { ReactiveFormsModule,Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
// import { MyDatePickerModule } from 'angular4-datepicker';
// import { MyDatePickerModule } from 'mydatepicker';
//import { MdDatepickerModule, MdInputModule, MdNativeDateModule } from '@angular/material';
import {CalendarModule} from 'primeng/calendar';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ImmigrationDetailsComponent } from './immigration-details/immigration-details.component';
import {FormServiceService} from './form-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    EducationalDetailsComponent,
    NavbarComponent,
    WorkExperienceComponent,
    ImmigrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CalendarModule,
    RouterModule.forRoot([
      {
         path: 'educational-details',
         component: EducationalDetailsComponent
      },
      {
        path: 'body',
        component:BodyComponent
      },
      {
        path:'work-experience',
        component:WorkExperienceComponent
      },
      {
        path:'immigration-details',
        component:ImmigrationDetailsComponent
      }
   ])
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
