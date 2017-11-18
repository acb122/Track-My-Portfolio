import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AppStateModule } from './state/state.module';


export const firebaseConfig = environment.firebaseConfig
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
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
    MatButtonModule,
    CommonModule,
    AppRoutingModule,
    AppStateModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
