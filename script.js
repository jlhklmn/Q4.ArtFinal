// [[ Functions ]]
function update(x, y) {
    document.getElementById("clouds").style.left = x*0.005;

    document.getElementById("overlay").style.left = x*0.01;
    document.getElementById("overlay").style.top = y*0.0025;

    document.getElementById("mountain").style.left = x*0.015;
    document.getElementById("mountain").style.top = y*0.005;

    document.getElementById("bushes").style.left = x*0.02;
    document.getElementById("bushes").style.top = y*0.0075;

    document.getElementById("mirror").style.left = x*0.025;
    document.getElementById("mirror").style.top = y*0.01;

    document.getElementById("reflection").style.left = x*0.025;
    document.getElementById("reflection").style.top = y*0.005;
}

// [[ Events ]]
document.addEventListener("mousemove", function(mouse) {
    update(-(mouse.clientX - window.screen.width/2), -(mouse.clientY - window.screen.height/2));
});
