const Intern = require("../lib/Intern.js");


describe('Properly creates Intern object that inherits from Employee class', () => {

    it("returns the Intern's name", () => {
        const intern = new Intern("Bob", 5, "test@email.com", "University of Minnesota");

        expect(intern.getName()).toBe("Bob");
    })

    it("returns the Intern's ID", () => {
        const intern = new Intern("Bob", 5, "test@email.com", "University of Minnesota");

        expect(intern.getId()).toEqual(expect.any(Number));
        expect(intern.getId()).toBe(5);
    })

    it("returns the Intern's email", () => {
        const intern = new Intern("Bob", 5, "test@email.com", "University of Minnesota");
        // regular expression of valid email format
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

        expect(intern.getEmail()).toEqual(expect.any(String));
        expect(intern.getEmail()).toMatch(regexEmail);
    })

    it("returns the Intern's School", () => {
        const intern = new Intern("Bob", 5, "test@email.com", "University of Minnesota");

        expect(intern.getSchool()).toEqual(expect.any(String));
        expect(intern.getSchool()).toBe("University of Minnesota");
    })

    it("returns the intern's role", () => {
        const intern = new Intern("Bob", 5, "test@email.com", "University of Minnesota");

        expect(intern.getRole()).toEqual("Intern");
    })
})