import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  transaction!: Transaction;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private toast: ToastrService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.transactionService.getAllTransactions().subscribe((data) => {
      this.transaction = data.find((t) => t.id === id)!;
    });
  }
  

  updateTransaction() {
    console.log('this.transaction', this.transaction);
    this.transactionService
      .updateTransaction(this.transaction._id, this.transaction)
      .subscribe(
        (response) => {
          this.toast.success('Transaction updated successfully');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error updating transaction', error);
        }
      );
  }
}
