import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  updateTransaction(id: string, transaction: Transaction): Observable<any> {
    return this.http.put(`${this.apiUrl}/transactions/${id}`, transaction);
  }

  loadTransactions(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/load-transactions`, data);
  }

  getSortedTransactions(startDate: number, endDate: number): Observable<Transaction[]> {
    let params = new HttpParams();
    params = params.append('startDate', startDate.toString());
    params = params.append('endDate', endDate.toString());
    return this.http.get<Transaction[]>(`${this.apiUrl}/sort-transactions`, { params: params });
  }
}
