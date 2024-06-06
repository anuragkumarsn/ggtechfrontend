import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private toast: ToastrService
  ) {}
  ngOnInit(): void {}

  loadData() {
    const data = {};
    this.transactionService.loadTransactions(data).subscribe(
      (response) => {
        this.toast.success('Data loaded successfully');
        window.location.reload();
      },
      (error) => {
        this.toast.error('Data already loaded');
      }
    );
  }
}
