import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmpEntity } from '../entities/emp.entity';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private readonly http: HttpClient) { }
  private apiServer = "http://localhost:3000/api";

  findAllEmp(): Observable<EmpEntity[]> {
    return this.http.get<EmpEntity[]>(`${this.apiServer}/emp`);
  }
}
