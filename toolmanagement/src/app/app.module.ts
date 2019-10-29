import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckOutDetailComponent } from './check-out-detail/check-out-detail.component';
import { CheckOutHeaderComponent } from './check-out-header/check-out-header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    TopbarComponent,
    CheckOutComponent,
    CheckInComponent,
    CheckOutDetailComponent,
    CheckOutHeaderComponent,
    
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
