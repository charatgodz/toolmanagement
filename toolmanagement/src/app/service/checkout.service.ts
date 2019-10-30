import { borrow_header } from './../interface/checkout.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private backendUrl: string ='http://localhost:9000/api/checkout'
  constructor(private httpClient : HttpClient) { }

  postCheckoutheader(header: borrow_header){
    return this.httpClient.post(this.backendUrl,header)
  }



  
}
