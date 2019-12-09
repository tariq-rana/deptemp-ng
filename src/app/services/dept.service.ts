import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    return this.http.post<DeptDTO>(`${this.apiServer}/dept`, deptDTO)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateDept(deptId:number, deptDTO: DeptDTO): Observable<any> {
    return this.http.patch<DeptDTO>(`${this.apiServer}/dept/${deptId}`, deptDTO)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteDept(deptId:number){
    return this.http.delete<any>(`${this.apiServer}/dept/${deptId}`)
    .pipe(
      catchError(this.handleError)
    );
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
