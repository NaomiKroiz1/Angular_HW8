import { Component, OnInit } from '@angular/core';
import { Worker } from '../../types/Worker';
import { WorkersService } from '../../services/workers.service';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Worker[] = [];
  constructor(private workersService: WorkersService) {
    this.workersService.getWorkers()
      .subscribe((workers: Worker[]) => this.workers = workers);
     debugger
  }

  ngOnInit(): void {
  }

}
