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




//tadução da página para português

let currentLanguage = "English";

$('#language').click(function (){

    if (currentLanguage === "English") {

    $("#headerSubtitle").text("Ache para seu amigo gatuno um companheiro felino");

    //navBar

    $('#navContact').text("contato")
    $('#navPrices').text("preços")

    //características

    $("#firstFeature").text("Fácil de usar");
    $("#firstSubFeature").text("(até seu gato conseguiria).");

    $("#secondFeature").text("Vasta clientela");
    $("#secondSubFeature").text("Todos os tipos de gatinhos.");

    $("#thirdFeature").text("Satisfação Garantida");
    $("#thirdSubFeature").text("Ache um amigo para seu gatinho ou devolvemos seu dinheiro");

    //slides

    $("#firstSlide").text("-Graças ao Tincat meu gato achou uma coleguinha malhada. chega de passeios solitários");
    $("#secondSlide").text("-Eu já estava cansado de cantar no telhado sozinho. obrigado Tincat! Meow Meow");


    //preços
    
    $("#pricesTitle").text("Planos para todos os públicos");
    $("#pricesSubtitle").text("Preços simples e que cabem no seu bolso");

    const firstCard = $(".card")[0];
    const secondCard = $(".card")[1];
    const thirdCard = $(".card")[2];

    $(firstCard).find("h4").text("Siamês");
    $(firstCard).find("h3").text("Gratuíto");
    $(firstCard).find("p:eq(0)").text("5 matches por dia");
    $(firstCard).find("p:eq(1)").text("10 mensagens por dia");
    $(firstCard).find("p:eq(2)").text("Uso ilimitado do app");
    $(firstCard).find("button").text("cadastrar");

    $(secondCard).find("h4").text("Chartreux");
    $(secondCard).find("h3").text("$20/Mês");
    $(secondCard).find("p:eq(0)").text("matches ilimitados");
    $(secondCard).find("p:eq(1)").text("mensagens ilimitadas");
    $(secondCard).find("p:eq(2)").text("Uso ilimitado do app");
    $(secondCard).find("button").text("assinar");

    $(thirdCard).find("h4").text("sphynx");
    $(thirdCard).find("h3").text("$40/Mês");
    $(thirdCard).find("p:eq(0)").text("Fila prioritária");
    $(thirdCard).find("p:eq(1)").text("matches ilimitados");
    $(thirdCard).find("p:eq(2)").text("mensagens ilimitadas");
    $(thirdCard).find("p:eq(3)").text("Uso ilimitado do app");
    $(thirdCard).find("button").text("assinar");

    // download

    $("#downloadAreaTitle").text("Encontre agora o amigo perfeito para seu gatinho");
    
    currentLanguage = "Portuguese";

    } else {

        location.reload();
    }


});

//
year = new Date().getFullYear();
$("small").children("span")[0].innerHTML = year;
