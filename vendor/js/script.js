var typed = new Typed(".typing",{
    strings:["College Student.", "Web Developer.", "Programmer.", "Delivery Rider."],
    typeSpeed:100,
    backSpeed:80,
    loop:true
})

$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 80){
        $('body').addClass('fixed-header');
    }
    else{
        $('body').removeClass('fixed-header')
    }

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            }
        }
    });
});

const switchToggler = document.querySelector(".style-switcher-toggler");
switchToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("bi-sun-fill");
    dayNight.querySelector("i").classList.toggle("bi-moon-fill");
    document.body.classList.toggle("dark");
    document.body.style.transition ="all 0.5s ease";
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("bi-sun-fill");
    }
    else{
        dayNight.querySelector("i").classList.add("bi-moon-fill");
    }
})