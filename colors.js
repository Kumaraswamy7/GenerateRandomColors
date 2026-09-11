let h1 = document.querySelector('h1');
let rgb = document.querySelector('.contentarea #rgbcolor');
let colorbox = document.querySelector('.colorbox');
let timeid = null;
let check = true;
let color1, color2, color3, opacity = null;
function generaterandomcolor() {
    if (timer()) {
        check = false;
    }
    else {
        clearInterval(timeid);
        timeid = null;
        check = true;
    }
}

function timer() {
    if (check) {
        timeid = setInterval(() => {
            color2 = Math.floor((Math.random() * 254) + 1);
            color3 = Math.floor((Math.random() * 254) + 1);
            color1 = Math.floor((Math.random() * 254) + 1);
            opacity = (Math.random()).toFixed(3);
            rgb.innerText = `rgba(${color1},${color2},${color3},${opacity})`
            colorbox.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        }, 1000);
        return true;
    }
    else return false;
}

let colorpopup = document.querySelector('.colorpopup');
let contentarea = document.querySelector('.contentarea');
let samplecolor = document.querySelector('#sample');
let btn_ok = document.querySelector('#btn-0k');
colorbox.addEventListener('click', () => {
    clearInterval(timeid);
    timeid = null;
    colorpopup.classList.add('displaypop');;
    contentarea.classList.add('origincontent');
    samplecolor.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    contentarea.style.display = 'flex';
})

btn_ok.addEventListener('click', () => {
    contentarea.style.display = 'none';
    colorpopup.classList.remove('displaypop');
    contentarea.classList.remove('origincontent');
})

