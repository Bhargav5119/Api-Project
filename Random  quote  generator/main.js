let quote = document.querySelector(".quote");
let autor = document.querySelector(".author");
let btn = document.querySelector(".btn");

let url = 'https://api.quotable.io/random';

let generateQuote = () => {
    quote.innerHTML = "Loading.."
    autor.innerHTML = ""
    fetch(url)
        .then(responce => responce.json())
        .then(data => {
            console.log(data);
            quote.innerHTML = `${data.content}`
            autor.innerHTML = `${data.author}`
        })
}

window.addEventListener("load", generateQuote)
btn.addEventListener("click", generateQuote)