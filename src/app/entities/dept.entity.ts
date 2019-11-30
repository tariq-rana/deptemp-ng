import { EmpEntity } from './emp.entity';

export class DeptEntity{
    deptId:number;
    deptName:string;
    emp?:EmpEntity[];
}


