let person;
if(person != undefined){
    console.log("Hello "+person);
}else{
    console.log("Hello World");
}
console.log(`============================================`);
function square(value:number){
  console.log(`${value*value}`);
}
square(10);

function square1(value){
 return value*value;
}

console.log(square1(10));

console.log(`=======================================`);
const persons = ["Alice","Priya","Anjali"];

persons.forEach(data => console.log(data.toUpperCase()));

persons.forEach(function(data) {console.log(data.toUpperCase())});

console.log(`==================================================================`);

type Student = {
    stuid:number,
    stufname:string,
    stulname?:string,
    stufees:number,
    stucourse:string,
    stuhostelfacility:boolean
}

function printStudentDetails(student:Student):string{
  return `Student id is ${student.stuid} and Student First Name is ${student.stufname}
  and Student Last Name is ${student.stulname} and Student's Fess is ${student.stufees}
  and Student Course is ${student.stucourse} and Student's Hostel Availability is ${student.stuhostelfacility}`;
}

let hostelStudent:Student = {
    stuid : 100,
    stufname : "Rajeev",
    stulname : "Shukla",
    stufees : 2000,
    stucourse :"comerce",
    stuhostelfacility: true
}

console.log(printStudentDetails(hostelStudent));

console.log(`==========================================`);

class Employee{
      name:string;
      age:number;
      gender:string;
      isMerried:boolean;
      salary:number;     
 constructor(){
    this.name = "Amit";
    this.age = 34;
    this.gender = "Male";
    this.isMerried = true;
    this.salary = 34000;
 }
 
 salaryIncrement(salary:number){
    salary = (salary*20)/100+salary;
   return salary;
 }

}

let emp = new Employee();
console.log(emp.salaryIncrement(34000));

console.log(emp.name);

console.log(`=======================================`);
class Customer {
    private _custName:string;
    private _custAge:number;
    private _billamount:number;
    constructor(custName:string, custAge:number, custBill:number){
         this._custName = custName;
         this._custAge = custAge;
         this._billamount = custBill;
    }

    get customerName(){
        return this._custName;
    }
}

let cust = new Customer("Johny", 35, 2000);

console.log(cust);

console.log(cust.customerName);