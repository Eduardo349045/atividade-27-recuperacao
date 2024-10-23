document.getElementById('addItemBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('itemInput').value;
    if (inputValue.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('itemList').appendChild(li);
        document.getElementById('itemInput').value = '';
    }
});

const ball = document.getElementById('ball');
let topPosition = 50;
let leftPosition = 50;

document.addEventListener('keydown', function(event) {
    const step = 10;
    switch(event.key) {
        case 'ArrowUp':
            topPosition -= step;
            break;
        case 'ArrowDown':
            topPosition += step;
            break;
        case 'ArrowLeft':
            leftPosition -= step;
            break;
        case 'ArrowRight':
            leftPosition += step;
            break;
    }
    ball.style.top = topPosition + 'px';
    ball.style.left = leftPosition + 'px';
});
