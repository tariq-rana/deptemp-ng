import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeptEntity } from '../entities/dept.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private readonly http: HttpClient) { }
  private apiServer = "http://localhost:3000/api";

  findAllDept(): Observable<DeptEntity[]> {
    return this.http.get<DeptEntity[]>(`${this.apiServer}/dept`);
  }
}
