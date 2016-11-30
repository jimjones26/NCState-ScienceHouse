import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { DistrictsService } from '../../shared/model/districts.service';
import { District } from '../../shared/model/district';
import { School } from '../../shared/model/school';

@Component({
  selector: 'app-district-detail',
  templateUrl: './district-detail.component.html',
  styleUrls: ['./district-detail.component.css']
})
export class DistrictDetailComponent implements OnInit {

  district$: Observable<District>;
  schools$: Observable<School[]>;

  constructor(
    private route: ActivatedRoute,
    private districtsService: DistrictsService) { }

  ngOnInit() {
    const districtUrl = this.route.snapshot.params['id'];

    this.district$ = this.districtsService.findDistrictByUrl(districtUrl);

    this.schools$ = this.districtsService.findAllSchoolsForDistrict(districtUrl);
  }

}
