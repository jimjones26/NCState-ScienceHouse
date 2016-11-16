import { Component, OnInit } from '@angular/core';

import { OfficesService } from '../shared/model/offices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private officesService: OfficesService) { }

  ngOnInit() {
  }

}
