import { Component, OnInit } from '@angular/core';
import { CountiesService } from '../shared/model/counties.service';
import { County } from '../shared/model/county';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.css']
})
export class CountiesComponent implements OnInit {

  allCounties: County[];
  filtered: County[];

  constructor( private countiesService: CountiesService) { }

  ngOnInit() {
    this.countiesService.findAllCounties()
      .subscribe(counties => this.allCounties = this.filtered = counties);
  }

  search(search: string) {
    console.log('search working');
    this.filtered = this.allCounties.filter(county => county.name.toUpperCase().includes(search.toUpperCase()));
  }

}
