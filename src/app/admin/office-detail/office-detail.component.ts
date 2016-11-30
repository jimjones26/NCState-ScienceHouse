import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { OfficesService } from '../../shared/model/offices.service';
import { Office } from '../../shared/model/office';
import { County } from '../../shared/model/county';

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.css']
})
export class OfficeDetailComponent implements OnInit {

  office$: Observable<Office>;
  counties$: Observable<County[]>;

  constructor(
    private route: ActivatedRoute,
    private officesService: OfficesService) { }

  ngOnInit() {

    const officeUrl = this.route.snapshot.params['id'];

    this.office$ = this.officesService.findOfficeByUrl(officeUrl);

    this.counties$ = this.officesService.findAllCountiesForOffice(officeUrl);

  }

}
