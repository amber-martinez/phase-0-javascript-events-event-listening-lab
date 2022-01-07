// const firstBox = document.getElementsByTagName('div')[1];
input = document.getElementById('input');

function addingEventListener() {
    alert('Congrats, this button was successfully clicked!');
    input.addEventListener('click', addingEventListener);
}

addingEventListener()