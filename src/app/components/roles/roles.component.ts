import { Component, OnInit } from '@angular/core';
import { Role } from '../../types/Role';
import { RolesService } from '../../services/roles.service';
import { WorkersService } from '../../services/workers.service';
import { Worker } from '../../types/Worker';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Role[] = [];
  workers: Worker[] = [];

  constructor(private roleService: RolesService, private workersService: WorkersService) {
    this.roleService.getRoles()
      .subscribe((roles) => this.roles = roles);
    this.workersService.getWorkers()
    .subscribe((workers: Worker[]) => this.workers = workers);
  }

  ngOnInit(): void {
  }

  calcAvgSalary(roleId: number) {
    let sum = 0;
    let count = 0;
    this.workers.forEach(w => {
      if (w.role == roleId) {
        count++;
        sum += w.salary;
      }
    });
    return sum / count;
  }
}
