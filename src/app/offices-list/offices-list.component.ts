import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../shared/model/office';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {

  @Input()
  offices: Office[];

  constructor() { }

  ngOnInit() {
  }

}
