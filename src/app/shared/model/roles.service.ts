import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Role } from './role';
import { AngularFire } from 'angularfire2/index';

@Injectable()
export class RolesService {

  constructor(private af: AngularFire) { }

  findAllRoles(): Observable<Role[]> {
    return this.af.database.list('roles').map(Role.fromJsonArray);
  }

}
