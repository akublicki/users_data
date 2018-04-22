var peopleDB = [];

function Person (attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
};

function renderRow(name, surname, age, role) {
    return '<div><div>' + name + ' </div><div> ' + surname + ' </div><div> ' + age + ' </div><div> ' + role + '</div></div>';
}

function renderDB() {
    var containerDB = document.getElementById('records');
    containerDB.innerHTML = '';
    peopleDB.map(function (person) {
        containerDB.innerHTML += renderRow(person.name, person.surname, person.age, person.role);
    });
}

var button = document.getElementById('addButton');
button.addEventListener('click', function(){
    var inputName = document.getElementById('inputName').value;
    var inputSurname = document.getElementById('inputSurname').value;
    var inputAge = document.getElementById('inputAge').value;
    var inputRole = document.getElementById('inputRole').value;

    var person = new Person({
        name: inputName,
        surname: inputSurname,
        age: inputAge,
        role: inputRole,
    });
    peopleDB.push(person);
    renderDB();
});