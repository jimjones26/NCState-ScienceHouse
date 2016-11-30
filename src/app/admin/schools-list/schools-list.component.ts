import { Component, OnInit, Input } from '@angular/core';
import { School } from '../../shared/model/school';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {

  @Input()
  schools: School[];

  constructor() { }

  ngOnInit() {
  }

}
