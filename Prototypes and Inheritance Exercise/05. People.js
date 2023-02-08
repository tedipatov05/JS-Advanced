function people() {
 
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instatiate directly.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
 
        work() {
            let task = this.tasks.shift();
 
            console.log(`${this.name}${task}`);
            this.tasks.push(task);
        }
 
        collectSalary() {
 
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
 
        getSalary() {
            return this.salary;
        }
    }
 
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(" is working on a simple task.");
        }
    }
 
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(" is working on a complicated task.");
            this.tasks.push(" is taking time off work.");
            this.tasks.push(" is supervising junior workers.");
        }
    }
 
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(" scheduled a meeting.");
            this.tasks.push(" is preparing a quarterly report.");
            this.dividend = 0;
 
        }
 
        getSalary() {
            return this.salary + this.dividend;
        }
    }
 
    return { Employee, Junior, Senior, Manager };
}

const classes = people(); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  
