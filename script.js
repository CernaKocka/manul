const pocet_obrazku = 5;
var obrazek = 2;


setInterval(() => {
    if (obrazek > pocet_obrazku) obrazek = 1
    document.getElementById("slideshow").src = "imgs/galerie/" + obrazek + ".webp";
    obrazek++;
}, 5000)
