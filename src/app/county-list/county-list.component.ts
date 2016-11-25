import { Component, OnInit, Input } from '@angular/core';
import { County } from '../shared/model/county';

@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.css']
})
export class CountyListComponent implements OnInit {

  @Input()
  counties: County[];

  constructor() { }

  ngOnInit() {
  }

}
