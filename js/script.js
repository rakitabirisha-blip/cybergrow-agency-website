
// CYBERGROW AGENCY JAVASCRIPT

// 1. MOBILE NAVIGATION
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuButton && navigation) {
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
}

// 2. CLOSE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (navigation) {
            navigation.classList.remove('active');
        }
    });
});

// 3. DYNAMIC COPYRIGHT YEAR
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

// CYBERGROW AGENCY - JAVASCRIPT


// 1. MOBILE NAVIGATION

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');

if (menuButton && navigation) {

    menuButton.addEventListener('click', function () {

        navigation.classList.toggle('active');

    });

}


// 2. CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {

    link.addEventListener('click', function() {

        navigation.classList.remove('active');

    });

});


// 3. DYNAMIC COPYRIGHT YEAR

const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}


// 4. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});
