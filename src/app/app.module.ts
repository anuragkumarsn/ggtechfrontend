import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({ progressBar: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
