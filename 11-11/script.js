const images = document.querySelectorAll('#images-block img');

 for (let i = 0; i < images.length; i++){
    images[i].onclick = () => {
        alert(images[i].alt);
    }
}


function getString() {
    let str = '';

    for (let i = 0; i < arguments.length; i++){
        str += arguments[i] + ' ';
    }

    return str;
}
 const result = getString('Hello', 'World', 'Good', 'Jobs');

console.log(result)


const first_image = document.getElementById('first-img');
const second_image = document.getElementById('second-img');
const third_image = document.querySelector('#third-image');
const fourth_image = document.querySelector('#fourth-image');

first_image.onclick = () => {
    console.log('Good morning');
}

second_image.onclick = () => {
    console.log('Woooork');
}

third_image.onclick = () => {
    console.log('Heloo world');
    return false;
}

third_image.onmousemove = () => {
    console.log('log')
}

fourth_image.onmouseenter = () => {
    console.log('Work');
}
fourth_image.onmouseleave = () => {
    console.log('Good jobs')
}


const first_button = document.querySelector('#next-block');
const showMessage1 = () => {
    alert('Черный кот с рыбкой,  Хаски,  Леопард,  Кот с наушниками');
}

first_button.onclick = showMessage1;
