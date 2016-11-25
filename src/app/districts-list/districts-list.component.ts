import { Component, OnInit, Input } from '@angular/core';
import { District } from '../shared/model/district';

@Component({
  selector: 'app-districts-list',
  templateUrl: './districts-list.component.html',
  styleUrls: ['./districts-list.component.css']
})
export class DistrictsListComponent implements OnInit {

  @Input()
  districts: District[];

  constructor() { }

  ngOnInit() {
  }

}
