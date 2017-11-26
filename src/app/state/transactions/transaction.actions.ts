import { Action } from '@ngrx/store';
import { Transaction } from './transaction.model';

export const QUERY = '[transaction] query Transactions';

export const ADDED = '[transaction] added';
export const MODIFIED = '[transaction] modified';
export const REMOVED = '[transaction] removed';

export const UPDATE = '[transaction] update';
export const SUCCESS = '[transaction] update success';

// Initial query
export class Query implements Action {
    readonly type = QUERY;
    constructor() { }
}

// AngularFire2 StateChanges
export class Added implements Action {
    readonly type = ADDED;
    constructor(public payload: Transaction) { }
}

export class Modified implements Action {
    readonly type = MODIFIED;
    constructor(public payload: Transaction) { }
}

export class Removed implements Action {
    readonly type = REMOVED;
    constructor(public payload: Transaction) { }
}


// Run a Firestore Update
export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Transaction>,
    ) { }
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() { }
}

export type TransactionActions =
    Query |
    Added |
    Modified |
    Removed |
    Update |
    Success;