import { tassign } from 'tassign';
import { TRANSACTIONS_COLUMN_DATA, TRANSACTIONS_DETAILS_DATA, ON_TRANSACTION_CHANGE } from './transaction-details-page.actions';

export interface ITransactionDetailsStates {
    transactionDetailsData: object[];
    transactionColumnsData: object[];
    currentTransaction: object;
}

export const TRANSACTION_DETIALS_INITIAL_STATE: ITransactionDetailsStates = {
    transactionDetailsData: [],
    transactionColumnsData: [],
    currentTransaction: {}
};

export function transactionDetailsReducer(state: ITransactionDetailsStates = TRANSACTION_DETIALS_INITIAL_STATE, action) {
    switch (action.type) {
        case TRANSACTIONS_COLUMN_DATA: return tassign(state, { transactionColumnsData: action.columnData });
        case TRANSACTIONS_DETAILS_DATA: return tassign(state, { transactionDetailsData: action.detailData });
        case ON_TRANSACTION_CHANGE: {
            const newColumnData = state.transactionColumnsData.map((item: any, index) => {
                item['display_value'] = action.currentTransaction[item.col_name];
                return item;
            });
            return tassign(state, { transactionColumnsData: newColumnData, currentTransaction: action.currentTransaction });
        }
        default: return state;
    }
}
