window.addEventListener("load", function() {
    console.log("Hi")
});

document.querySelector("#my_button").addEventListener("click", function() {
    console.log("I am in button")
    bd = document.querySelector(".dict_info")
    bd.classList.toggle("font2")
});