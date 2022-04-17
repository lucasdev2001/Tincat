$('#cat0').click(function () {
    const audio = new Audio("./sounds/meow.mp3");
    audio.play();
});

$('#cat1').click(function () {
    const audio = new Audio("./sounds/purr.wav");
    audio.play();
});

$('#cat2').click(function () {
    const audio = new Audio("./sounds/meow0.wav");
    audio.play();
});


year = new Date().getFullYear();

$("small").children("span")[0].innerHTML = year;