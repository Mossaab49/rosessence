const swiper = new Swiper('.slides.swiper', {
    direction: 'horizontal', // Better UX
    loop: true, 
    autoplay: {
        delay: 2500, // 3 seconds
        disableOnInteraction: false, // Keep autoplay running even after user interaction
    }, 


    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enables clicking pagination bullets
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        },
    },

});



document.addEventListener("DOMContentLoaded", function() {
    let logo = document.querySelector(".logo");
    let roses = document.querySelector(".roses");
    let contact = document.querySelector(".contact");
    let reviews = document.querySelector(".reviews");
    let header = document.querySelector(".header"); // The header containing .logo

    function checkSectionPosition() {
       
            let rosesTop = roses.getBoundingClientRect().top;
            let reviewsTop = reviews.getBoundingClientRect().top;
            let headerBottom = header.getBoundingClientRect().bottom;
            let contactTop = contact.getBoundingClientRect().top;

            if (rosesTop <= headerBottom  ) {
                logo.style.color = "white"; // Change to desired color
            } else {
                logo.style.color = "rgb(252, 158, 158)"; // Default color
            }
    }

    // Run on scroll
    window.addEventListener("scroll", checkSectionPosition);
});






let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

window.onscroll =() => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ' ]' ).classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




