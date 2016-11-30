import { Component, OnInit, Input } from '@angular/core';
import { County } from '../../shared/model/county';

@Component({
  selector: 'app-counties-list',
  templateUrl: './counties-list.component.html',
  styleUrls: ['./counties-list.component.css']
})
export class CountiesListComponent implements OnInit {

  @Input()
  counties: County[];

  constructor() { }

  ngOnInit() {
  }

}
