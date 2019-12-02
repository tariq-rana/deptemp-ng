import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { DeptEntity } from '../entities/dept.entity';
import { DeptDTO } from '../entities/dept.dto';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  formData: DeptEntity;

  constructor(private readonly http: HttpClient) { }

  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
  private apiServer = "http://192.168.1.4:3000/api";

  findAllDept(): Observable<DeptEntity[]> {
    return this.http.get<DeptEntity[]>(`${this.apiServer}/dept`);
  }

  insertDept(deptDTO: DeptDTO): Observable<any> {
    return this.http.post<DeptDTO>(`${this.apiServer}/dept`, deptDTO);
  }

  updateDept(deptId:number, deptDTO: DeptDTO): Observable<any> {
    return this.http.patch<DeptDTO>(`${this.apiServer}/dept/${deptId}`, deptDTO);
  }

  deleteDept(deptId:number){
    return this.http.delete<any>(`${this.apiServer}/dept/${deptId}`);
  }

}
