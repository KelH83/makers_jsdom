const apiURL = "https://official-joke-api.appspot.com/random_joke";

fetch(apiURL)
.then((response) => response.json()) 
.then((data) => {
    document.querySelector("h1").textContent = data.setup
    button = document.querySelector('#joke-button');
    button.addEventListener('click', () => {
        document.querySelector("p").textContent = data.punchline
    });
});