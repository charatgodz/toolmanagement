import { borrow_header, borrow_id } from './../interface/checkout.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private backendUrl: string = 'http://localhost:9000/api/checkout'
  constructor(private httpClient: HttpClient) { }
  lastid: number;

  postCheckoutheader(header: borrow_header) {
    return this.httpClient.post<borrow_id>(this.backendUrl, header)
  }

  getLastid(ID) {
    console.log(ID);
    return ID;
  }




}
