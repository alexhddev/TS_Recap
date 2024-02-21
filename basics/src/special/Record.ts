
export {}

type Employee = {
    name: string,
    position: string,
    [key:string]: string | number
}

const john: Employee = {
    name: 'John',
    position: 'programmer',
    // extend this object
    email: 'john@company.com',
    age: 30
}

const employeesRecords: Record<string, Employee> = {
    coolEmployees: john
}

type Positions = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type PositionsSalaries = Record<Positions, { salary: number }>
