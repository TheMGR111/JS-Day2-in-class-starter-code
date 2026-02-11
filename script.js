const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
function Employee(firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
    return new Employee(firstName, lastName, email, birthdate, salary);
  };

  Employee.prototype.editEmployee = function(updates) {
    Object.assign(this, updates);
  };

  // Usage example:
  const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
  console.log(bill);

  bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
  console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate

class Employee {
  constructor (firstName, lastName, email, birthdate, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
    this.salary = salary;
  }

  getEmployeeInfo() {
      return `${this.firstName} ${this.lastName} (${this.email})`;
  }

  static addEmployee(array, fName, lName, email, dob, salary) {
          const newEmp = new Employee(fName, lName, email, dob, salary);
          array.push(newEmp);
          return newEmp;
      }

   editEmployee(updates) {
        Object.assign(this, updates);
    }
  }

    
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name

  const martin = new Employee("Martin", "Rodriguez", "martingrodriguez2003@gmai.com", "2003-10-22", 100000);

// 3. After step 2, console log your const and then try to console.log parts of the object

console.log("My Instance:", martin);
console.log("Just my email:", martin.email);

// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
  
const staff = [
  martin,
  new Employee("Jane", "Doe", "jane@company.com", "1995-03-12", 85000),
  new Employee("John", "Smith", "john@company.com", "1988-11-22", 72000)
];

// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
  
// Done

//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS

Employee.addEmployee(staff, "Alice", "Wonder", "alice@wonderland.com", "1992-07-04", 90000);

// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

function displayEmployees() {
    const tableBody = document.getElementById("employeeTableBody");
    tableBody.innerHTML = "";

    staff.forEach(emp => {
        let row = `
            <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.birthdate}</td>
                <td>$${emp.salary.toLocaleString()}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


displayEmployees();

//Try to output 3 instances of your class object into the table

// PART B Why we can't us synchrnous code
//Synchronous code doesn't work for network requests because JavaScript is single-threaded

// Callbacks

//Network requests take time (milliseconds to seconds). JavaScript is single-threaded, so if it waited synchronously for every network request, your entire browser would freeze! That's why we need asynchronous code.
//1.	Deep Nesting (3 levels): Each API call is nested inside the previous one, creating a "pyramid" shape that shifts the code further and further to the right
//2.	Hard to Read: You have to mentally track multiple levels of indentation to understand the flow
//3.	Repetitive Error Handling: Notice we have .catch(error => callback(error, null)) repeated three times - one for each level
//4.	Difficult to Modify: Want to add another API call? You'd need to add another level of nesting
//5.	Variable Scope Issues: The user variable needs to be accessible all the way down in the innermost callback, making it harder to track

// Promises
// Promises provide better control flow and chaining capabilities

// Async/Await
// Async/Await makes asynchronous code look synchronous and is easier to read
// All three approaches are still used in modern JavaScript, but async/await is preferred for new code

