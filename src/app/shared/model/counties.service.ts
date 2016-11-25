import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { County } from './county';
import { AngularFire } from 'angularfire2/index';

@Injectable()
export class CountiesService {

  constructor(private af: AngularFire) { }

  findAllCounties(): Observable<County[]> {
    return this.af.database.list('counties').map(County.fromJsonArray);
  }

}
