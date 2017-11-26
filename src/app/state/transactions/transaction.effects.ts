import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';

import { AppState } from '../state';

import { Transaction } from './transaction.model';

import { AUTHENTICATED } from '../users/user.actions';
import * as transactionActions from './transaction.actions'

@Injectable()
export class TransactionEffects {

    @Effect()
    query$: Observable<Action> = this.actions$.ofType(transactionActions.QUERY).pipe(
        switchMap(action => {
            console.log(action)
            return this.afs.collection<Transaction>('transactions', ref => {
                return ref.where('status', '==', 'cooking')
            })
                .stateChanges()
        }),
        mergeMap(actions => actions),
        map(action => {
            return {
                type: `[Transaction] ${action.type}`,
                payload: {
                    id: action.payload.doc.id,
                    ...action.payload.doc.data()
                }
            };
        })
    );



    @Effect()
    update$: Observable<Action> = this.actions$.ofType(transactionActions.UPDATE).pipe(
        map((action: transactionActions.Update) => action),
        switchMap(data => {
            const ref = this.afs.doc<Transaction>(`transactions/${data.id}`)
            return Observable.fromPromise(ref.update(data.changes))
        }),
        map(() => new transactionActions.Success())
    )

    constructor(private actions$: Actions, private afs: AngularFirestore) { }
}
