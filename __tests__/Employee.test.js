const Employee = require("../lib/Employee.js");


describe('valid creation of Employee object', () => {
    it("creates a valid Employee object", () => {
        const employee = new Employee("Bob", 5, "test@email.com");
        // regular expression of valid email format
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

        expect(employee.name).toBe("Bob");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.getId()).toBe(5);
        expect(employee.email).toEqual(expect.any(String));
        expect(employee.email).toMatch(regexEmail);
    })

    it("returns the Employee's name", () => {
        const employee = new Employee("Bob", 5, "test@email.com");

        expect(employee.getName()).toBe("Bob");
    })

    it("returns the Employee's ID", () => {
        const employee = new Employee("Bob", 5, "test@email.com");

        expect(employee.getId()).toEqual(expect.any(Number));
        expect(employee.getId()).toBe(5);
    })

    it("returns the Employee's email", () => {
        const employee = new Employee("Bob", 5, "test@email.com");
        // regular expression of valid email format
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

        expect(employee.getEmail()).toEqual(expect.any(String));
        expect(employee.getEmail()).toMatch(regexEmail);

    })

    it("returns the employee's role", () => {
        const employee = new Employee("Bob", 5, "test@email.com");

        expect(employee.getRole()).toEqual("Employee");
    })
})