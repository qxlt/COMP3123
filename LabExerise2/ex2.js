// Exercise 1
const gretter = (myArray, counter) =>{
    let greetText = `Hello `;
    for (item of myArray){
        console.log(`${greetText}${item}`)
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

// Exercise 2
const capitalize = (str) =>{
    const str_list = str.split('');
    let [one, ...rest] = str_list;
    const bigone = one.toUpperCase();
    const res_list = [bigone, ...rest];
    return res_list.join('')
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors);

// Exercise 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(lessthan20);
function lessthan20(num){
    return num<20
}
console.log(filterLessThan20)

// Exercise 5
var array = [1, 2, 3, 4];
const calculateSum = array.reduce(
    function(init, num){
        return init+num
    }
)
const calculateProduct = array.reduce(
    function(init, num){
        return init*num
    }
)
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`;
    }
}   

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());