import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { EmpEntity } from '../entities/emp.entity';
import { EmpDTO } from '../entities/emp.dto';
import { EmpRO } from '../entities/emp.ro';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  formData: EmpRO;
  
  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
  private apiServer = "http://192.168.1.4:3000/api";
  
  constructor(private readonly http: HttpClient) { }

  findAllEmp(): Observable<EmpEntity[]> {
    return this.http.get<EmpEntity[]>(`${this.apiServer}/emp`);
  }

  insertEmp(empDTO: EmpDTO): Observable<any> {
    return this.http.post<EmpDTO>(`${this.apiServer}/emp`, empDTO);
  }

  updateEmp(empId:number, empDTO: EmpDTO): Observable<EmpDTO> {
    return this.http.patch<EmpDTO>(`${this.apiServer}/emp/${empId}`, empDTO);
  }

  deleteEmp(empId:number){
    return this.http.delete<any>(`${this.apiServer}/emp/${empId}`);
  }

}
