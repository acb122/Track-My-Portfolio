import { AppState } from '../state';

import * as actions from './transaction.actions';
import { Transaction } from './transaction.model';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Entity adapter
export const transactionAdapter = createEntityAdapter<Transaction>();

export const initialState: EntityState<Transaction> = transactionAdapter.getInitialState();

// Reducer
export function transactionReducer(
    state: EntityState<Transaction> = initialState,
    action: actions.TransactionActions) {

    switch (action.type) {

        case actions.ADDED:
            return transactionAdapter.addOne(action.payload, state)

        case actions.MODIFIED:
            return transactionAdapter.updateOne({
                id: action.payload.id,
                changes: action.payload
            }, state)

        case actions.REMOVED:
            return transactionAdapter.removeOne(action.payload.id, state)

        default:
            return state;
    }

}

// Create the default selectors
export const getTransactionState = createFeatureSelector<EntityState<Transaction>>('transaction');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = transactionAdapter.getSelectors(getTransactionState);