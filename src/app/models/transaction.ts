export interface Sender {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    IDNumber: string;
  }
  
  export interface Recipient {
    firstName: string;
    lastName: string;
    email: string;
    accountNumber: string;
    bank: string;
  }
  
  export interface Transaction {
    _id: string;
    id: string;
    date: number;
    sender: Sender;
    recipient: Recipient;
    amount: number;
    currencyCd: string;
    comments: string;
    status: string;
  }
  