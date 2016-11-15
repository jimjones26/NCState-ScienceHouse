import { AuthMethods, AuthProviders } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBRhkRB3PeM78sKNOAqvGdEPk9xXjLz5ew',
  authDomain: 'nc-state-science-house.firebaseapp.com',
  databaseURL: 'https://nc-state-science-house.firebaseio.com',
  storageBucket: 'nc-state-science-house.appspot.com',
  messagingSenderId: '1018649605127'
};

export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
