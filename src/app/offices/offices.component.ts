import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../shared/model/offices.service';
import { Office } from '../shared/model/office';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  allOffices: Office[];
  filtered: Office[];

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.officesService.findAllOffices()
      .do(console.log)
      .subscribe(offices => this.allOffices = this.filtered = offices);
  }

  search(search: string) {
    this.filtered = this.allOffices.filter(office => office.name.toUpperCase().includes(search.toUpperCase()));
  }

}
