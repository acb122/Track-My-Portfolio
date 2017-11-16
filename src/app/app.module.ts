import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyB2GtyWM-Cj3NSU1X_NbwgMQyf8icqfmDM',
  authDomain: ' track-my-portfolio.firebaseapp.com',
  databaseURL: 'https://track-my-portfolio.firebaseio.com',
  projectId: 'track-my-portfolio',
  storageBucket: 'track-my-portfolio.appspot.com',
  messagingSenderId: '979970953428'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
