const images = document.querySelectorAll('#images-block img');

for(let i = 0; i < images.length; i++){
    images[i].onclick = () => {
        alert(images[i].alt);
    }
}

const country = document.querySelectorAll('#country-block a');

for (let i = 0; i < country.length; i++){
    country[i].onclick = () => {
        alert(country[i].href);
    }
}


