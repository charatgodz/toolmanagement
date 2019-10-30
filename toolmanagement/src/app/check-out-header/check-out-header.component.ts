import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CheckoutService } from '../service/checkout.service';


@Component({
  selector: 'check-out-header',
  templateUrl: './check-out-header.component.html',
  styleUrls: ['./check-out-header.component.css']
})
export class CheckOutHeaderComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private chekcoutheader: CheckoutService
    ) { 
   this.createForm();
  }
  
  private createForm(){
    this.form = this.fb.group({ 
      engineer_id: [],
      store_id: ['TL140802'],
      aircraft: [],
      flight: []
     });
  }

  onSubmit(){
    if(this.form.invalid) return;
    this.chekcoutheader
    .postCheckoutheader(this.form.value)
    .subscribe(result =>{
      console.log(result);
    },
    excep => alert(excep.error.message)
    );
  }
  
  ngOnInit() {
  }

}
