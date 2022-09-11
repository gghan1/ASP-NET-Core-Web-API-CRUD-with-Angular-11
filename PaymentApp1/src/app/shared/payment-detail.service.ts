import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(
    /*private http: HttpClient*/ // Error here
  ) { }


  readonly baseURL = 'https://localhost:44343/api/PaymentDetails'
  formData: PaymentDetail = new PaymentDetail();
}
