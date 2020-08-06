
function greeter(person: Person) {
    return 'Hello ' + person.firstName + person.lastName;
}

interface Person {
    firstName: string;
    lastName: string;
}


class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }

}

let user = new Student('Jane', 'M.', 'Doe');

document.body.textContent = greeter(user);
console.log(greeter(user));



