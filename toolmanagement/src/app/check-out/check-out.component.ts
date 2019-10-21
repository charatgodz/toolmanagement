import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  model ={
    batch: '',
    aircraft: '',
    engineer_id: '',
    engineer_name: ''
  }

  constructor() { }

  ngOnInit() {
  }

  public batchEnter(){
    console.log(this.model)
  }

}
