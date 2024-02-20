export {}

let queryResult: any = 5 // disables the type check

queryResult = '5'

queryResult = [5]

function getSalaryFromExternalService(employeeId: number):unknown{
    return JSON.parse('5')
}

let salary = getSalaryFromExternalService(5);

if (typeof salary === 'number') {
    salary++
}

if (typeof salary === 'string') {
    salary.includes('$')
}

if (typeof salary === 'string' || typeof salary === 'number') {
    salary.valueOf()
}

if (salary &&
    typeof salary === 'object' &&
    'history' in salary && 
    Array.isArray(salary.history)) {
    salary.history.push(12000)
}

// when to use any?
// Start of JS to TS migrations
// inside unit tests

