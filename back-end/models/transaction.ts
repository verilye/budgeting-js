export interface Transaction{

    transactionType:TransactionType;
    amount:number;
    date:Date;

}

enum TransactionType{
    debit = 'D',
    credit = 'C',
}

// needed types
// transactions,goals, savings, income, bills, 
