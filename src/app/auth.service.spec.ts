import { TestBed, inject } from '@angular/core/testing'

import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Subject } from 'rxjs/Subject'
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';

let authSubject: Subject<firebase.User>
describe('AuthService', () => {
  beforeEach(() => {
    authSubject = new Subject<firebase.User>()
    const fakeFireBaseAuth = {
      authState: authSubject,
      auth: jasmine.createSpyObj('auth', ['signOut', 'signInWithPopup'])
    }

    fakeFireBaseAuth.auth.signOut.and.returnValue(Promise.resolve(true));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],

      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: fakeFireBaseAuth }]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy()
  }));
});
