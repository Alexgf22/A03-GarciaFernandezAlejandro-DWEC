const Employee = {
    id: 0,
    name: "",
    lastName: "",
    birthDate: new Date(),
    supervisors: [],
    focus: function() {
        return `Name: ${this.name}, is focusing`;
    },
    travel: function() {
        return `Name: ${this.name}, is traveling`;
    },
    addSupervisor: function(supervisor) {
        this.supervisors.push(supervisor);
        return `Added ${supervisor.name} as supervisor`;
    },
    leadSupervisors: function() {
        let supervisors = this.supervisors.map(s => s.name).join(', ');
        return `Name: ${this.name}, is leading supervisors: ${supervisors}`;
    }
};

const CEO = Object.create(Employee);
CEO.focus = function() {
    return `${this.name} ${this.lastName} is focusing as CEO`;
};

const Supervisor = Object.create(Employee);
Supervisor.department = "";
Supervisor.team = [];
Supervisor.addToTeam = function(programmer) {
    this.team.push(programmer);
    return `${programmer.name} has been added to ${this.name}'s team`;
};
Supervisor.meetTeam = function() {
    let team = this.team.map(p => p.name).join(', ');
    return `${this.name} has met with the team: ${team}`;
};

const Programmer = Object.create(Employee);
Programmer.education = "";
Programmer.experience = "";
Programmer.focus = function() {
    return `${this.name} ${this.lastName} is focusing as programmer`;
};
Programmer.code = function() {
    return `${this.name} ${this.lastName} is coding`;
};

const ceo = Object.create(CEO);
ceo.id = 22;
ceo.name = "Alejandro";
ceo.lastName = "Garcia Fernandez";

const supervisor = Object.create(Supervisor);
supervisor.id = 10;
supervisor.name = "Mario";
supervisor.lastName = "Perez Rodriguez";
supervisor.department = "Development";

const programmer = Object.create(Programmer);
programmer.id = 18;
programmer.name = "Andrea";
programmer.lastName = "Garcia Lopez";

document.getElementById("result").innerHTML += `<p>${ceo.focus()}</p>`;
document.getElementById("result").innerHTML += `<p>${supervisor.addSupervisor(ceo)}</p>`;
document.getElementById("result").innerHTML += `<p>${supervisor.addToTeam(programmer)}</p>`;
document.getElementById("result").innerHTML += `<p>${supervisor.meetTeam()}</p>`;
document.getElementById("result").innerHTML += `<p>${programmer.code()}</p>`;
