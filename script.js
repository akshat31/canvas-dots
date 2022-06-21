const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw () {
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
          ctx.strokeStyle =
            "rgb(0, " +
            Math.floor(255 - 42.5 * i) +
            ", " +
            Math.floor(255 - 42.5 * j) +
            ")";
          ctx.beginPath();
          ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
          ctx.fillStyle = `hsl(${i * j}, 50%, 50%)`;
          ctx.fill();
        }
    }
}

draw()
