import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CheckoutService } from '../../service/checkout.service';
declare const $: any;


@Component({
  selector: 'check-out-header',
  templateUrl: './check-out-header.component.html',
  styleUrls: ['./check-out-header.component.css']
})
export class CheckOutHeaderComponent implements OnInit {

  engineer_id: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private chekcoutheader: CheckoutService
    ) { 
   this.createForm();
  }
  
  private createForm(){
    this.form = this.fb.group({ 
      engineer_id: ['',Validators.required],
      store_id: ['TL140802'],
      aircraft: ["",Validators.required],
      flight: []
     });
  }
  onSubmit(){
    console.log(this.form.value)
     if(this.form.invalid) return;
    this.chekcoutheader
    .postCheckoutheader(this.form.value)
    .subscribe(result =>{
      this.chekcoutheader.getLastid(result.borrow_id);
      this.form.reset();
      $('#checkout-header-modal').modal('hide');
    },
    excep => alert(excep.error.message)
    ); 
    
  }
  
  ngOnInit() {
  }

}
