const apiURL = "https://official-joke-api.appspot.com/random_joke";

fetch(apiURL)
.then((response) => response.json()) 
.then((data) => {
    document.querySelector("h1").textContent = data.setup
    function deliverPunchline(){
        document.querySelector("p").textContent = data.punchline
    }
    const timeout = setTimeout(deliverPunchline, 2000);
});