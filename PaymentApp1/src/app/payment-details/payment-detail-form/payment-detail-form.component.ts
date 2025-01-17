import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../../shared/payment-detail.model';
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
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.pstPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success("Submitted Successfully", "Payment Detail");
      },
      err => { console.log(err) }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

}
