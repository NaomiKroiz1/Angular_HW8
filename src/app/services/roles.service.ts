import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Role} from '../types/Role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpService: HttpClient) { }

  getRoles() {
    return this.httpService.get<Role[]>('../assets/roles.json');
  }
}
