// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        //github usernmae
        this.github = github;
    }
    getGithub () {
        return this.github;
    }
    getRole() {
        let currentRole = "Engineer";
        return currentRole;
    }
}
module.exports = Engineer;