// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyB2GtyWM-Cj3NSU1X_NbwgMQyf8icqfmDM',
    authDomain: 'track-my-portfolio.firebaseapp.com',
    databaseURL: 'https://track-my-portfolio.firebaseio.com',
    projectId: 'track-my-portfolio',
    storageBucket: 'track-my-portfolio.appspot.com',
    messagingSenderId: '979970953428'
  }
}
