import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Worker } from '../types/Worker';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private httpService: HttpClient) { }

  getWorkers(){
    return this.httpService.get<Worker[]>('../assets/workers.json');
  }
}
