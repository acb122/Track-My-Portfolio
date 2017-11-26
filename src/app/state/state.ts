import { User } from './users';
import { EntityState } from '@ngrx/entity';
import { Transaction } from './transactions/transaction.model';

export interface AppState {
    transactions: EntityState<Transaction>;
    user: User;
}