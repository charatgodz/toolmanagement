import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './components/loan/loan.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckOutDetailComponent } from './components/check-out-detail/check-out-detail.component';
import { CheckOutHeaderComponent } from './components/check-out-header/check-out-header.component';
import { ValidateDirective } from './directives/validate.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    TopbarComponent,
    CheckOutComponent,
    CheckInComponent,
    CheckOutDetailComponent,
    CheckOutHeaderComponent,
    ValidateDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
