import { DeptEntity } from './dept.entity';

export class EmpEntity{
    empId:number;
    empName:string;
    mailId:string;
    joinDate:Date;
    dept:DeptEntity;
}