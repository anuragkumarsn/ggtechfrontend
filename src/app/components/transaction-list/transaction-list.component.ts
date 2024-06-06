import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';
import * as moment from 'moment';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  startDate:   string = '';
  endDate:   string = '';

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(
      data => {
        this.transactions = data;
      },
      error => {
        console.error('Error fetching transactions', error);
      }
    );
  }

  searchTransactions() {
    console.log(this.startDate, this.endDate)
    if (!this.startDate || !this.endDate) {
      return;
    }

    const startDateMoment = moment(this.startDate, 'DD/MM/YYYY');
    const endDateMoment = moment(this.endDate, 'DD/MM/YYYY');

    if (!startDateMoment.isValid() || !endDateMoment.isValid()) {
      return;
    }

    const startDateEpoch = startDateMoment.valueOf();
    const endDateEpoch = endDateMoment.valueOf();

    console.log('-->',startDateEpoch , endDateEpoch);
    this.transactionService.getSortedTransactions(startDateEpoch, endDateEpoch).subscribe((data) => {
      this.transactions = data;
    });
  }
}
