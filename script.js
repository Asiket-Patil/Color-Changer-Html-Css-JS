const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const title =document.querySelector('h1');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'coral') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';

        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
    })

})