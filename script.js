function PersonDB(){
    this.database = [];
}

PersonDB.prototype.addPerson = function (person) {
   this.database.push(person);
};

PersonDB.prototype.displayPeople = function () {
    console.log(this.database);
};

function Person (attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
}

function Render(attribute) {
    this.container = document.getElementById(attribute);
}

Render.prototype.setHTML = function (database) {
    this.container.innerHTML = '';
    var self = this;
    database.map(function (person) {
        self.container.innerHTML += self.renderRow(person.name, person.surname, person.age, person.role);
    });
};

Render.prototype.renderRow = function(name, surname, age, role) {
    return '<div><div>' + name + ' </div><div> ' + surname + ' </div><div> ' + age + ' </div><div> ' + role + '</div></div>';
};

var dbInstance = new PersonDB();
var renderInstance = new Render('records');

renderInstance.setHTML(dbInstance.database);

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
        role: inputRole
    });
    dbInstance.addPerson(person);
    renderInstance.setHTML(dbInstance.database);
});