import { Component, OnInit } from '@angular/core';
import { DistrictsService } from '../../shared/model/districts.service';
import { District } from '../../shared/model/district';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  districts$: Observable<District[]>;

  constructor(private districtsService: DistrictsService) { }

  ngOnInit() {
    this.districts$ = this.districtsService.findAllDistricts();
  }

}
