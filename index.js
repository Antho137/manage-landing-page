// Open and close menu for mobile nav
$('.menu').click(function() {
    if ($('.navbar').parent().hasClass('mobile-nav')) {
        $('.navbar').parent().removeClass('mobile-nav')
        $('.menu').attr("src", "images/icon-hamburger.svg")
    }
    else {
        $('.navbar').parent().addClass('mobile-nav')
        $('.menu').attr("src", "images/icon-close.svg")
    }
});

// The horizontal slider for testimonials
$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });
}); 

// get email and button values for the newsletter sign up
const email = document.getElementById("email");
const button = document.getElementById("btn");

// function for email verification
function emailValidation() {
    // checking email
    if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(email.value)) {
        alert("Thanks for signing up!"); 
        email.focus();
        return true;
    } else { 
        alert("Please enter a valid email!");      
        email.focus();
        return false;
    }
}

// empty the email input after submit
function resetEmail() {
	document.getElementById("email").value = "";
}

// Events to validate email and reset email
function createEventListeners() {
	button.addEventListener("click", emailValidation);
    resetEmail();
}

window.addEventListener("load", createEventListeners);