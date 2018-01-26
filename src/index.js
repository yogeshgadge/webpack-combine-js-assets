const red = require('./snippets/red');

function component() {
    var element = document.createElement('div');


    element.innerHTML = 'Hello '+red();

    return element;
}

document.body.appendChild(component());