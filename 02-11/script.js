function getUser(a, b) {
    return a < b ? a : b;
}

let result = getUser(1, 2);
console.log(result);

function number(result) {
    alert(result);
}
number(result);


/********** №1 ***********/
function hello() {
    return 'Привет, Javascript';
}
console.log(hello());


/********** №2 ***********/
function number1(kub) {
    return kub ** 3;
}
console.log(number1(3))


/********** №3 ***********/
let name = 'Василий';

function getName(name = 'гость '){
    return 'Привет, ' + name;
}
console.log(getName(name));