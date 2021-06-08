/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word Widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

//ANSWER

class Employee {
  constructor (firstName, lastName, email, age){
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.age = age
  }
  makeWidget(){
    return '${this.firstName} ${this.lastName} Widget';
  }
}


////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co. that extends Employee
  Each manager has all of the same properties as an employee with the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

//ANSWER

class Manager extends Employee {
  constructor(firstName, lastName, email, age, reports, hire, fire){
  super(firstName, lastName, email, age)
  this.reports = [];
  this.hire = (Employee);
  this.fire = 0;
  }

  newEmployee(){
    super.newEmployee();
    this.hire.push(reports)
    return '${firstName} ${lastName} added to reports'
  }

  fire(){
    super.fire();
    for (var i = 0; i < reports.length; i++);
    delete this.reports(Employee[i])
    return '${firstName} ${lastName} removed from reports'
  }
}

////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  create a class ProgressiveManager that extends Manager.  A Progressive Manager has all of the same properties as a manager with the following additional properties:
    - title - default 'Not a manager' 
    - bonus - default 0

  When employees are hired or fired, the manager's title should be updated based on the number of reports.
    0 reports : Not a manager
    1-3 reports : Barely Manager
    4-10 reports : Mostly Manager
    11-50 reports : Manager
    51-100 reports : Manager Plus
    101+ reports : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

//ANSWER

class ProgressiveManager extends Manager {
  super(firstName, lastName, email, age, reports, hire, fire){
  this.title = title;
  this.bonus = bonus;
  }

  hire(){
   var title = 'Not a manager';
    if (i = 0, reports.length >= 2, i++){
      return title = 'Barely Manager';
    } else if (i = 0, reports.length >= 9, i++){
      return title = 'Mostly Manager';
    } else if (i = 0, reports.length >= 49, i++){
      return title = 'Manager';
    } else if (i = 0, reports.length >= 99, i++){
      return title = 'Manager Plus';
    } else {
      return title = 'Bestest Manager';
    }
  }
  
  fire(){
    var bonus = 0;
    return function(){
      bonus++;
      return bonus += 100;
    }
  }
}

////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns an anonymous function that is called when the machine is done rebooting
        - The anonymous function should decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

//ANSWER

class Machine {
  constructor(){
    this.widgetsMadeCount = 0;
    this.wearAndTearCount = 0;
    this.needsReboot = false;
  }

  makeWidgets(num){
    this.widgetsMadeCount += num;
    for (i = 0, widgetsMadeCount.length[i] >= 49, i++)
    return this.wearAndTearCount += 1;
  }

  fixMachine(){
    return this.needsReboot = true;
  }

  reboot(){
    return function(){
      this.wearAndTearCount -= 10;
      this.needsReboot = false
    }
  }
}
