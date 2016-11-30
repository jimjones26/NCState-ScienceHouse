import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../shared/model/roles.service';
import { Role } from '../../shared/model/role';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles$: Observable<Role[]>;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.roles$ = this.rolesService.findAllRoles();
  }

}
