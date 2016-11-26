import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { FirebaseAuth, FirebaseAuthState } from 'angularfire2/index';
import { AuthInfo } from './auth-info';

@Injectable()
export class AuthService {

    static UNKNOWN_USER = new AuthInfo(null);

    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

    constructor(private auth: FirebaseAuth) {
        this.auth.subscribe(user => {
            if (user) {
                console.log('we have a user!');
                console.log(user.uid + user.auth.email);
                const authInfo = new AuthInfo(user.uid);
                this.authInfo$.next(authInfo);
            } else {
                console.log('aint no user around here');
                this.authInfo$.next(AuthService.UNKNOWN_USER);
            }
        });
    }

    login(email, password): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.login({ email, password }));
    }

    signUp(email, password) {
        return this.fromFirebaseAuthPromise(this.auth.createUser({ email, password }));
    }

    fromFirebaseAuthPromise(promise): Observable<any> {
        const subject = new Subject<any>();

        promise
            .then(res => {
                const authInfo = new AuthInfo(this.auth.getAuth().uid);
                this.authInfo$.next(authInfo);
                subject.next(res);
                subject.complete();
            }, err => {
                this.authInfo$.error(err);
                subject.error(err);
                subject.complete();
            });

        return subject;
    }

    logout() {
        this.auth.logout();
        this.authInfo$.next(AuthService.UNKNOWN_USER);
    }

}
