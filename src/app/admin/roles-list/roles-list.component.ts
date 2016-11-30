import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../../shared/model/role';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  @Input()
  roles: Role[];

  constructor() { }

  ngOnInit() {
  }

}
