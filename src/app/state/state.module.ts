import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { UserEffects } from './users';
import { TransactionEffects } from './transactions';
import { userReducer } from './users/user.reducer';
import { transactionReducer } from './transactions/transaction.reducer';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([
      UserEffects,
      TransactionEffects
    ]),
    StoreModule.forRoot({
      user: userReducer,
      transactions: transactionReducer
    }),

    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    UserEffects,
    TransactionEffects
  ],
})
export class AppStateModule { }