var setup = function () {
    createCanvas(1000, 800)
};

var draw = function () {
    background(color('aquamarine'));
    stroke("green")
    strokeWeight(80)
    circle(100, 100, 100)
    fill('cyan');

    for (let index = 0; index < 80; index++) {
        for (let blue = 0; blue < 100; blue++) {
            stroke(random(["red", "turquiose", "aquamarine", "maroon"]));
            fill(random(255))
            circle(index, blue, 100);


        }
    };
