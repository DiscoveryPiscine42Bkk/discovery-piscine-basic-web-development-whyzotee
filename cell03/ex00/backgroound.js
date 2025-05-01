const changeBackground = () => {
    const body = document.getElementById("body");

    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    var color = "#";

    for (let index = 1; index <= 3; index++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    body.style.backgroundColor = color;
}