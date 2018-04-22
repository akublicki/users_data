function PersonDB() {
    this.database = [];
}

PersonDB.prototype.addPerson = function (person) {
    this.database.push(person);
};

PersonDB.prototype.displayPeople = function () {
    console.log(this.database);
};

function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
}

function Render(container, button, inputName, inputSurname, inputAge, inputRole) {
    this.container = document.getElementById(container);
    this.button = document.getElementById(button);
    this.inputName = document.getElementById(inputName);
    this.inputSurname = document.getElementById(inputSurname);
    this.inputAge = document.getElementById(inputAge);
    this.inputRole = document.getElementById(inputRole);
}

Render.prototype.setHTML = function (database) {
    this.container.innerHTML = '';
    var self = this;
    database.map(function (person) {
        self.container.innerHTML += self.renderRow(person.name, person.surname, person.age, person.role);
    });
};

Render.prototype.getValuesFromInput = function () {
    return {
        name: this.inputName.value,
        surname:this.inputSurname.value,
        age: this.inputAge.value,
        role: this.inputRole.value,
    }
};

Render.prototype.addClick = function () {
    var self = this;
    this.button.addEventListener('click', function () {
        var person = self.getValuesFromInput();
        dbInstance.addPerson(person);
        renderInstance.setHTML(dbInstance.database);
    });
};

Render.prototype.renderRow = function (name, surname, age, role) {
    return '<div><div>' + name + ' </div><div> ' + surname + ' </div><div> ' + age + ' </div><div> ' + role + '</div></div>';
};

var dbInstance = new PersonDB();
var renderInstance = new Render('records', 'addButton', 'inputName', 'inputSurname', 'inputAge', 'inputRole');
renderInstance.addClick();

renderInstance.setHTML(dbInstance.database);

var button = document.getElementById('addButton');
