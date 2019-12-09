import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    return this.http.get<EmpEntity[]>(`${this.apiServer}/emp`)
    .pipe(
      catchError(this.handleError)
    )
  }

  insertEmp(empDTO: EmpDTO): Observable<any> {
    return this.http.post<EmpDTO>(`${this.apiServer}/emp`, empDTO)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateEmp(empId:number, empDTO: EmpDTO): Observable<EmpDTO> {
    return this.http.patch<EmpDTO>(`${this.apiServer}/emp/${empId}`, empDTO)    
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteEmp(empId:number){
    return this.http.delete<any>(`${this.apiServer}/emp/${empId}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
