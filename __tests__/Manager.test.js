const Manager = require("../lib/Manager.js");


describe('Properly creates Manager object that inherits from Employee class', () => {

    it("returns the manager's name", () => {
        const manager = new Manager("Bob", 5, "test@email.com", 23);

        expect(manager.getName()).toBe("Bob");
    })

    it("returns the manager's ID", () => {
        const manager = new Manager("Bob", 5, "test@email.com", 23);

        expect(manager.getId()).toEqual(expect.any(Number));
        expect(manager.getId()).toBe(5);
    })

    it("returns the manager's email", () => {
        const manager = new Manager("Bob", 5, "test@email.com", 23);
        // regular expression of valid email format
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

        expect(manager.getEmail()).toEqual(expect.any(String));
        expect(manager.getEmail()).toMatch(regexEmail);
    })

    it("returns the manager's office number", () => {
        const manager = new Manager("Bob", 5, "test@email.com", 23);

        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
        expect(manager.getOfficeNumber()).toBe(23);
    })
})