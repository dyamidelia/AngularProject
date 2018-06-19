import { TransactionsService } from '../services/transactions.service';
import { map } from 'rxjs/operators';

export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const POST_TRANSACTIONS_SUCCESS = 'POST_TRANSACTIONS_SUCCESS';
export const GET_COlUMNS_SUCCESS = 'GET_COlUMNS_SUCCESS';

export const startGetTransactions = (service:TransactionsService)=>{
    return service.getTransactions()
    .pipe(map(transactions => getTransactions(transactions)));
}

export const getTransactions = (transactions:any[])=>({
    type: GET_TRANSACTIONS_SUCCESS,
    transactions
});

export const addColumn = (columns:any[])=>({
    type: GET_TRANSACTIONS_SUCCESS,
    columns
});

export const startGetColumns = (service:TransactionsService)=>{
    return service.getColumns()
    .pipe(map(columns => getColumns(columns)));
}

export const getColumns = (columns:any[])=>({
    type: GET_COlUMNS_SUCCESS,
    columns
});



