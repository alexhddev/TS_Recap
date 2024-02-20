

class Project {

    // fields:
    name: string
    budget: number

    // constructor function
    constructor(name: string, budget?: number) {
        this.name = name;
        if (budget) {
            this.budget = budget
        } else {
            this.budget = 10000;
        }
    }

    // methods
    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }
}

const coolProject = new Project('Cool Name', 20000);
const defaultProject = new Project('Default project');
coolProject.printBudget();