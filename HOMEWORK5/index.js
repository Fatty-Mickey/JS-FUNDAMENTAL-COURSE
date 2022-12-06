// ************************ Task 1 ************************
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

// function propsCount(currentObject) {
//     let objectSize = 0;
//     for (const key in currentObject) {
//         objectSize +=1
//     }
//     return objectSize
// }

console.log(propsCount(mentor));

// ************************ Task 2 ************************
let students = {
    first: 'Ivan',
    second: 'Maksim',
    third: 'Petro',
    fourth: 'Stepan',
    fifth: 'Albert'
};

function showProps(obj) {
    console.log(Object.keys(students));
    console.log(Object.values(students));
};

showProps(students);

// ************************ Task 3 ************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `Person full name is ${this.name} ${this.surname}.`
    }
};

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        return `Student full name is ${this.name} ${middleName} ${this.surname}.`
    }
    showCourse() {
        let course = new Date().toLocaleDateString().split('.')[2] - this.year + 1;
        if (course >= 1 && course < 7) {
            return `Current course: ${course}`;
        }
        return 'Incorrect data'
    }
};

let somePerson = new Student('Maksim', 'Bilyk', 2020);
console.log(somePerson.showFullName('Igorovych'));
console.log(somePerson.showCourse());

// ************************ Task 4 ************************
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        return `${this.fullName} salary: ${this.dayRate * this.workingDays}`;
    }
    #experience = 1.2;

    set setExp(value) {
        this.#experience = value;
    }

    showExp() {
        return `New experience: ${this.#experience}`;
    }

    showSalaryWithExperience() {
        return `${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experience}`;
    }

    showSalaryWithExperience1() {
        return this.dayRate * this.workingDays * this.#experience;
    }
};
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log(worker1.showExp());
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log(worker1.showExp());
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log(worker2.showExp());
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log(worker2.showExp());
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log(worker3.showExp());
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log(worker3.showExp());
console.log(worker3.showSalaryWithExperience());


function sortSalary(workersArray) {
    const salaryArray = [];
    workersArray.sort((a, b) => a.showSalaryWithExperience1() - b.showSalaryWithExperience1())
    workersArray.forEach(el => salaryArray.push(el.fullName + ' : ' + el.showSalaryWithExperience1()))
    return salaryArray;
}

console.log(sortSalary([worker1, worker2, worker3]));



// ************************ Task 5 ************************
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
};

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
};

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
};

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

function handleFigures(figures) {
    const areaArr = [];
    figures.forEach(element => {
        if (element instanceof GeometricFigure) {
            areaArr.push(element.getArea());
            console.log(`${element.toString()} - area: ${element.getArea()}`);
        }
    });
    return `Total area: ${areaArr.reduce((acc, el) => acc + el, 0)}`;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
