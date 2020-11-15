// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // name retrieval
    getName() {
        return this.name
    }
    //id setter
    getId() {
        return this.id
    }
    // email setter using inquirer.
    getEmail() {
        return this.email
    }
    // getting role of the employee
    getRole() {
      let currentRole = "Employee";
      return currentRole;
    }
}
module.exports = Employee;