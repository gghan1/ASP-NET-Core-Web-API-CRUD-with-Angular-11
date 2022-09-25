import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {


  constructor(
    public service: PaymentDetailService,
    //private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.pstPaymentDetail().subscribe(
      res => {

      },
      err => { console.log(err) }
    )
  }

}
