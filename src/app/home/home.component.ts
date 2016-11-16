import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../shared/model/offices.service';
import { Office } from '../shared/model/office';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  offices: Office[];

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.officesService.findAllOffices()
      .do(console.log)
      .subscribe(offices => this.offices = offices);
  }

}
