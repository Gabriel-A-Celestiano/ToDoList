const btnDarkMode = document.getElementById("js-dm");
btnDarkMode.addEventListener('click', () => {
    let html = document.querySelector("html");
    html.classList.toggle("dark-mode")
})