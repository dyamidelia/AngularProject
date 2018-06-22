import { tassign } from 'tassign';
import { TRANSACTIONS_COLUMN_DATA, TRANSACTIONS_DETAILS_DATA, ON_TRANSACTION_CHANGE } from './transaction-details-page.actions';

export interface ITransacationDetailsStates {
    transacationDetailsData: object[];
    transacationColumnsData: object[];
    currentTransaction: object;
}

export const TRANSACTION_DETIALS_INITIAL_STATE: ITransacationDetailsStates = {
    transacationDetailsData: [],
    transacationColumnsData: [],
    currentTransaction: {}
};

export function transactionDetailsReducer(state: ITransacationDetailsStates = TRANSACTION_DETIALS_INITIAL_STATE, action) {
    switch (action.type) {
        case TRANSACTIONS_COLUMN_DATA: return tassign(state, { transacationColumnsData: action.columnData });
        case TRANSACTIONS_DETAILS_DATA: return tassign(state, { transacationDetailsData: action.detailData });
        case ON_TRANSACTION_CHANGE: {
            const newColumnData = state.transacationColumnsData.map((item: any, index) => {
                item['display_value'] = action.currentTransaction[item.col_name];
                return item;
            });
            return tassign(state, { transacationColumnsData: newColumnData, currentTransaction: action.currentTransaction });
        }
        default: return state;
    }
}
