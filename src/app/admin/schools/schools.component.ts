import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../shared/model/schools.service';
import { School } from '../../shared/model/school';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  // allSchools: School[];
  // filtered: School[];

  schools$: Observable<School[]>;

  constructor(private schoolsService: SchoolsService) { }

  ngOnInit() {
    this.schools$ = this.schoolsService.findAllSchools();

    /*
    this.schoolsService.findAllSchools()
      .subscribe(schools => this.allSchools = this.filtered = schools);
      */
  }

  /*
  search(search: string) {
    console.log('search working');
    this.filtered = this.allSchools.filter(school => school.name.toUpperCase().includes(search.toUpperCase()));
  }
  */

}
