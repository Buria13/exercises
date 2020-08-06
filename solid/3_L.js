// Liskov substitution principle


class Person {}

class Member extends Person {
    access() {
        console.log('You have access.');
    }
}

class Guest extends Person {
    access() {
        console.log("You don't have access");
    }
}

class FrontEnd extends Member {
    canCreateFrontend() {}
}

class BackEnd extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {

}

function openSecretDoor(person) {
    person.access()
}

openSecretDoor(new FrontEnd());
openSecretDoor(new BackEnd());
openSecretDoor(new PersonFromDifferentCompany());




