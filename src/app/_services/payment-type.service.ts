import { Injectable } from '@angular/core';
import { paymentType } from '../_model/paymentType';

@Injectable()
export class PaymentTypeService {

  paymenttypes: paymentType[] = [
    { id: 1, name: 'Direct Bank Transfare' },
    { id: 2, name: 'Cheque Payment' },
    { id: 3, name: 'Paypal' },
    { id: 4, name: 'Visa' },
    { id: 5, name: 'Mastercard' },
    { id: 6, name: 'On Dilivery' },
  ];

  getAllPayments():paymentType[]{
    return this.paymenttypes.slice();
  }

  constructor() { }
}
