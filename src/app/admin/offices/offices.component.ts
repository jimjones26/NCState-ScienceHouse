import { Component, OnInit } from '@angular/core';
import { OfficesService } from '../../shared/model/offices.service';
import { Office } from '../../shared/model/office';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  // allOffices: Office[];
  // filtered: Office[];

  offices$: Observable<Office[]>;

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
    this.offices$ = this.officesService.findAllOffices();
  }

  /*
    search(search: string) {
      this.filtered = this.allOffices.filter(office => office.name.toUpperCase().includes(search.toUpperCase()));
    }
    */

}
