import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private backendUrl : string = 'http://localhost:9000/api/cart';

  constructor(private httpClient : HttpClient) { }

  getItem(){
    return this.httpClient.get<any[]>(this.backendUrl)

  }
}

export  interface cartMember {
  cart_id: string;
  batch: string;
  pn_description: string;
  pn: string;
  sn: string;
  qty: string;
  aircraft: string;
  bin: string;
  engineer_id: string;
  engineer_name: string;
}