// [[ Functions ]]
function reflect() {
    if (parseInt(document.getElementById("reflection").style.width, 10) > 320) {
        document.getElementById("reflection").style.opacity = 0;
    }

    if (parseInt(document.getElementById("reflection").style.width, 10) > 750) {
        document.getElementById("reflection").style.left = "40vw";
        document.getElementById("reflection").style.top = "70vh";

        document.getElementById("reflection").style.width = "20vw";
        document.getElementById("reflection").style.opacity = 1;
    };

    document.getElementById("reflection").style.left = (parseInt(document.getElementById("reflection").style.left, 10) - 1) + 'vw';
    document.getElementById("reflection").style.top = (parseInt(document.getElementById("reflection").style.top, 10) - 2) + 'vh';

    document.getElementById("reflection").style.width = (parseInt(document.getElementById("reflection").style.width, 10) + 2) + 'vw';
    setTimeout(reflect, 20);
};

function update(x, y) {
    document.getElementById("clouds").style.left = x*0.005;

    document.getElementById("overlay").style.left = x*0.01;
    document.getElementById("overlay").style.top = y*0.0025;

    document.getElementById("mountain").style.left = x*0.015;
    document.getElementById("mountain").style.top = y*0.005;

    document.getElementById("reflection").style.marginLeft = x*0.025;
    document.getElementById("reflection").style.marginTop = y*0.01;

    document.getElementById("bushes").style.left = x*0.02;
    document.getElementById("bushes").style.top = y*0.0075;

    document.getElementById("mirror").style.left = x*0.025;
    document.getElementById("mirror").style.top = y*0.01;
}

// [[ Events ]]
document.addEventListener("mousemove", function(mouse) {
    update(-(mouse.clientX - window.screen.width/2), -(mouse.clientY - window.screen.height/2));
});

setTimeout(reflect, 30);