// 1. Getting the DOM element
const buttonEl = document.querySelector('#my-button');
const para = document.querySelector("p")

// 2. Attaching the event listener
buttonEl.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 10)
    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNum}`)
    .then((response) => response.json())
    .then((data) =>{
        para.innerText = data.title
    })
});

// // ALTERNATIVE

// document.querySelector('#my-button').addEventListener('click', () => {
//     console.log('clicked!');
// });

// // This function will attach the event listener when called 
// const attachListener = () => {
//     document.querySelector('#my-button').addEventListener('click', () => {
//     console.log('clicked!');
//     });
// }

//   // If the user clicks on the button now, nothing will happen (yet)

//   // Later, we call the function defined previously
// attachListener();

//   // The click is now handled


