// Type aliases: define the shape of an object

type StringOrNumber = string | number

type Position = 'Programmer' | 'HR'

type Colleague = {
    name: string,
    age: number,
    position: Position,
    greetBack?: Function
}

const myColleague: Colleague = {
    name: 'John',
    age: 30,
    position: "Programmer"
}

const myOtherColleague: Colleague = {
    name: 'Bil',
    age: 30,
    position: "Programmer",
    greetBack: ()=>{
        console.log("hello!")
    }
}

function greetColleague(colleague: Colleague){
    console.log('Hi ' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack()
    }
}

greetColleague(myColleague);
greetColleague(myOtherColleague)

