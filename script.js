
// Show Login form
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


// Sticky navbar on scroll
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


//Menu Toggle  (responsive menu-bar)
const toggleMenuIcon = document.getElementById('menu-bar'); 
const mainNavbar = document.getElementById('main-nav');

const toggleMenu = () => {
    mainNavbar.classList.toggle('active');
}
toggleMenuIcon.addEventListener('click', toggleMenu);




// Toggle Password visibility
const togglePassword = document.querySelector("#pw-visibility");
const password = document.querySelector("#login-pw");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("fa-eye-slash");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });


    // full page hero section view
    window.addEventListener("scroll",function(){
        var main = document.getElementById("main");
        main.classList.toggle("scrolled", window.scrollY > 0)
    })