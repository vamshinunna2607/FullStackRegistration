import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormServiceService} from './form-service.service'
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule      
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
