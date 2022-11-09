// Составьте программу, которая принимает с клавиатуры числа, пока не будет
// введено значение 0.
// Для каждого введенного с клавиатуры положительного числа, программа должна
// выводить на экран "плюс", для каждого отрицательного – "минус".
//     Например: ввод: 7, 14, -18, 0 ⇒ вывод: плюс, плюс, минус


// const showResults = () => {
//     let value;
//     while (value !== 0){
//         value = +prompt('Ввелите число');
//
//         if (value > 0){
//             alert('плюс');
//         } else if (value < 0){
//             alert('минус');
//         }
//     }
// }
// showResults();


/******** slice ********/
// const countries = ['Kyrgyzstan', 'Russia', 'China', 'USA'];
// const newCountries = countries.slice(2,4);
//
// console.log(newCountries);


/******** slice ********/
// const countries = ['Kyrgyzstan', 'Russia', 'China', 'USA'];
// const arr = countries.splice(1,0, 'Portugal');
// console.log(arr);


/******** setTimeOut ********/
// const hello = (message) => {
//     alert(message);
// }
//
// const timerId = setTimeout(hello, 3000, 'good morning');
// clearTimeout(timerId);


/******** setInteval ********/
// const updateTime = () => {
//     document.getElementById('time').innerText = new Date().toTimeString();
// }
// const stopTime = (id) => {
//     clearInterval(id);
// }
// const intervalId = setInterval(updateTime, 1000);
// setTimeout(stopTime, 5000, intervalId);



