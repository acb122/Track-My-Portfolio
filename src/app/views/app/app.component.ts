// import { AuthService } from '../auth.service'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { User } from '../../state/users/user.model'
import { Observable } from 'rxjs/Observable'
import * as userActions from '../../state/users/user.actions'

interface AppState {
  user: User
}

@Component({
  selector: 'tmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string
  user$: Observable<User>

  constructor(private store: Store<AppState>) {
    this.title = 'Track my Portfolio'
  }
  ngOnInit() {
    this.user$ = this.store.select('user')
    this.store.dispatch(new userActions.GetUser())
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin())
  }
  logout() {
    this.store.dispatch(new userActions.Logout())
  }

}