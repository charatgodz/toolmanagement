import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    eng_id : new FormControl(),
    ac : new FormControl(),
    batch : new FormControl()
  });

  onSubmit(){
    console.log(this.form.value);
  }

  onEnter(){
    console.log("onEnter Working");
  }

}
