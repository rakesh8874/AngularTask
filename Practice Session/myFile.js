var person;
if (person != undefined) {
    console.log("Hello " + person);
}
else {
    console.log("Hello World");
}
console.log("============================================");
function square(value) {
    console.log("".concat(value * value));
}
square(10);
function square1(value) {
    return value * value;
}
console.log(square1(10));
console.log("=======================================");
var persons = ["Alice", "Priya", "Anjali"];
persons.forEach(function (data) { return console.log(data.toUpperCase()); });
persons.forEach(function (data) { console.log(data.toUpperCase()); });
console.log("==================================================================");
function printStudentDetails(student) {
    return "Student id is ".concat(student.stuid, " and Student First Name is ").concat(student.stufname, "\n  and Student Last Name is ").concat(student.stulname, " and Student's Fess is ").concat(student.stufees, "\n  and Student Course is ").concat(student.stucourse, " and Student's Hostel Availability is ").concat(student.stuhostelfacility);
}
var hostelStudent = {
    stuid: 100,
    stufname: "Rajeev",
    stulname: "Shukla",
    stufees: 2000,
    stucourse: "comerce",
    stuhostelfacility: true
};
console.log(printStudentDetails(hostelStudent));
console.log("==========================================");
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "Amit";
        this.age = 34;
        this.gender = "Male";
        this.isMerried = true;
        this.salary = 34000;
    }
    Employee.prototype.salaryIncrement = function (salary) {
        salary = (salary * 20) / 100 + salary;
        return salary;
    };
    return Employee;
}());
var emp = new Employee();
console.log(emp.salaryIncrement(34000));
console.log(emp.name);
console.log("=======================================");
var Customer = /** @class */ (function () {
    function Customer(custName, custAge, custBill) {
        this._custName = custName;
        this._custAge = custAge;
        this._billamount = custBill;
    }
    Object.defineProperty(Customer.prototype, "customerName", {
        get: function () {
            return this._custName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var cust = new Customer("Johny", 35, 2000);
console.log(cust);
console.log(cust.customerName);
