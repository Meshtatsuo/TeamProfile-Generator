const Engineer = require("../lib/Engineer.js");


describe('Properly creates Engineer object that inherits from Employee class', () => {

    it("returns the Engineer's name", () => {
        const engineer = new Engineer("Bob", 5, "test@email.com", "https://github.com/Meshtatsuo");

        expect(engineer.getName()).toBe("Bob");
    })

    it("returns the Engineer's ID", () => {
        const engineer = new Engineer("Bob", 5, "test@email.com", "https://github.com/Meshtatsuo");

        expect(engineer.getId()).toEqual(expect.any(Number));
        expect(engineer.getId()).toBe(5);
    })

    it("returns the Engineer's email", () => {
        const engineer = new Engineer("Bob", 5, "test@email.com", "https://github.com/Meshtatsuo");
        // regular expression of valid email format
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

        expect(engineer.getEmail()).toEqual(expect.any(String));
        expect(engineer.getEmail()).toMatch(regexEmail);
    })

    it("returns the Engineer's Github Link", () => {
        const engineer = new Engineer("Bob", 5, "test@email.com", "https://github.com/Meshtatsuo");

        expect(engineer.getGithubLink()).toEqual(expect.any(String));
        expect(engineer.getGithubLink()).toBe("https://github.com/Meshtatsuo");
    })
})