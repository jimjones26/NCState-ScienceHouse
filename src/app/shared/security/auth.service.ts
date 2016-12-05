import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { FirebaseAuth, FirebaseAuthState, AngularFireDatabase, FirebaseRef } from 'angularfire2/index';
import { AuthInfo } from './auth-info';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    static UNKNOWN_USER = new AuthInfo(null);
    sdkDb: any;

    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb, private auth: FirebaseAuth, private router: Router) {

        this.sdkDb = fb.database().ref();

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

    signUp(email, password, role) {
        return this.fromFirebaseAuthPromise(this.auth.createUser({ email, password })
            .then(response => {
                if (response.uid) {
                    console.log('On new user creation', response.uid);
                    const updates = {};
                    updates['/users/' + response.uid] = { new_user: true };

                    const subject = new Subject<any>();

                    this.sdkDb.update(updates)
                        .then(val => {
                            subject.next(val);
                            subject.complete();
                        }, err => {
                            subject.error(err);
                            subject.complete();
                        });

                    return subject.asObservable();

                } else {
                    console.log('On new user creation, NO USER');
                }
            })
        );
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
        this.router.navigate(['/login']);
    }

}
