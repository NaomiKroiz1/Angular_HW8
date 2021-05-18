import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewWorkers: Boolean = true;
  setViewWorkers(val: boolean){
    this.viewWorkers = val;
  }
}


