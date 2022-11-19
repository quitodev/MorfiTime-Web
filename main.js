let description = document.querySelectorAll(".description")[0];
let benefits = document.querySelectorAll(".benefits")[0];
let download = document.querySelectorAll(".download")[0];
let comments = document.querySelectorAll(".comments")[0];
let contact = document.querySelectorAll(".contact")[0];

description.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("description").scrollIntoView({
        behavior: 'smooth'
    });
})
benefits.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("benefits").scrollIntoView({
        behavior: 'smooth'
    });
})
download.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("download").scrollIntoView({
        behavior: 'smooth'
    });
})
comments.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("comments").scrollIntoView({
        behavior: 'smooth'
    });
})
contact.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: 'smooth'
    });
})