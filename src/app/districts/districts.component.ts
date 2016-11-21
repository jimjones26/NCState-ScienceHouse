import { Component, OnInit } from '@angular/core';
import { DistrictsService } from '../shared/model/districts.service';
import { District } from '../shared/model/district';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  allDistricts: District[];
  filtered: District[];

  constructor(private districtsService: DistrictsService) { }

  ngOnInit() {
    this.districtsService.findAllDistricts()
      .subscribe(districts => this.allDistricts = this.filtered = districts);
  }

  search(search: string) {
    console.log('search working');
    this.filtered = this.allDistricts.filter(district => district.name.toUpperCase().includes(search.toUpperCase()));
  }

}
