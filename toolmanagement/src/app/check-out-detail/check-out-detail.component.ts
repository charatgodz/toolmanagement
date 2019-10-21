import { CartService, cartMember } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-out-detail',
  templateUrl: './check-out-detail.component.html',
  styleUrls: ['./check-out-detail.component.css']
})
export class CheckOutDetailComponent implements OnInit {
  public cartItem: cartMember[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService
    .getItem()
    .subscribe(result => {
     this.cartItem = result
    })
  }

}
