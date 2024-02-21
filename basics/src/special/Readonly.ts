export { }

let two = 2;
const five = 5;

function getFive():number {
    return 5;
}

type Employee = {
    name: string,
    position: string
}

type ReadOnlyEmployee = Readonly<Employee> 

const someEmployee: ReadOnlyEmployee = {
    name: 'Jeff',
    position: 'HR'
}

// someEmployee.position = 'Cool HR'

const CEO = 'Jeff' // strings are immutable 

const CeoObject = { // objects are not immutable
    name: 'Jeff',
    company: 'Amazon'
} as const

