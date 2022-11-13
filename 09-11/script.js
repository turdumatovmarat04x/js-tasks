/******* №1 *******/
const hello = (message) => {
    alert(message);
}

setTimeout(hello, 4000, 'Hello after 4 seconds');
setTimeout(hello, 8000, 'Hello after 8 seconds');


/******* №3 *******/
const YearOfBirth = +prompt('год рождения');
const currentYear = +prompt('Сегодняший год?');
result = YearOfBirth - currentYear;
alert(`вам ${result} лет`);















































// const updateTime = () => {
//     document.getElementById('time').innerText = new Date(200).toDateString();
// }
//
// setInterval(updateTime, 1000);
//
// const updateTime = () => {
//     document.getElementById('time').innerText = new Date().toTimeString();
// }
//
// setInterval(updateTime, 1000);
