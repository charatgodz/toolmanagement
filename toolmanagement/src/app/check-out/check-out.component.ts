import { CartService, cartMember } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  model: cartMember ={
    batch: '',
    aircraft: '',
    engineer_id: '',
    engineer_name: ''
  }

  constructor(private carrtService : CartService) { }

  ngOnInit() {
  }

  public batchEnter(){
    this.carrtService
    .postItem(this.model)
    .subscribe(
      result => {
        console.log(result);
      },
      excep =>{
        console.log(excep);
      }
    );
  }

}
