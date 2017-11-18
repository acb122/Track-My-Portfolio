import { TestBed, inject } from '@angular/core/testing'

import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Subject } from 'rxjs/Subject'
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about/about.component';
import { Router } from '@angular/router';
import { defer } from 'q';

let authSubject: Subject<firebase.User>
const deferred = defer()

describe('AuthService', () => {
  beforeEach(() => {
    authSubject = new Subject<firebase.User>()
    const fakeFireBaseAuth = {
      auth: jasmine.createSpyObj('auth', ['signOut', 'signInWithPopup'])
    }

    fakeFireBaseAuth.auth.signOut.and.returnValue(Promise.resolve(true));
    fakeFireBaseAuth.auth.signInWithPopup.and.returnValue(deferred.promise);


    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'dashboard', pathMatch: 'full', redirectTo: '/' }])],

      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: fakeFireBaseAuth }]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy()
  }));



  it('should not able to login', inject([AuthService], (service: AuthService) => {
    deferred.reject('t')
    service.login()
  }));

  it('should be able to login', inject([AuthService], (service: AuthService) => {
    const router = TestBed.get(Router)
    deferred.resolve('t');
    const navigateSpy = spyOn(router, 'navigate')
    service.login()
  }));

  it('should be able to logout', inject([AuthService], (service: AuthService) => {
    const router = TestBed.get(Router)
    const navigateSpy = spyOn(router, 'navigate')
    service.logout()
    expect(navigateSpy).toHaveBeenCalledWith(['/'])
  }));
});
