var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Employee = /** @class */ (function () {
  function Employee(fname, lname, salary) {
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
  return Employee;
})();
var HourlyEmployee = /** @class */ (function (_super) {
  __extends(HourlyEmployee, _super);
  function HourlyEmployee(fname, lname, salary, hoursPerWeek) {
    var _this = _super.call(this, fname, lname, salary) || this;
    _this.address = "default";
    _this.hoursPerWeek = hoursPerWeek;
    return _this;
  }
  HourlyEmployee.prototype.computeAnnualSalary = function () {
    return this.salary * this.hoursPerWeek * 52;
  };
  return HourlyEmployee;
})(Employee);

var john = new HourlyEmployee("John", "Smith", 30, 40);
console.log(john.computeAnnualSalary());
console.log(john.address);
