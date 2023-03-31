
document.getElementById('random').addEventListener('click', function () {
    const comment = document.getElementById('commentBox');
    comment.style.backgroundColor = randomColor();

})

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

//on hover color change
document.getElementById('bgChangeHover').addEventListener('mouseenter', function () {
    const comment = document.getElementById('bgChangeHover');
    comment.style.backgroundColor = randomColor();

})