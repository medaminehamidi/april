var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

var slideIndex2 = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > x.length) { slideIndex2 = 1 }
    x[slideIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 3000); // Change image every 2 seconds
}