let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let search_btn = document.getElementById("search");
let sound = document.getElementById("sound")

let result = document.getElementById("result");
// console.log(result);

search_btn.addEventListener("click", () => {
    let inputword = document.getElementById("input_word").value;
    

    fetch(`${url}${inputword}`)
        .then((responce) => responce.json())
        .then((data) => {
        console.log(data);
    
                result.innerHTML = ` 
                <div class="word">
                    <h3> ${inputword} </h3>
                    <button onclick="playsound()">
                        <i class="fa-solid fa-music"></i>
                    </button>
                </div>

                <div class="detail">
                    <p>${data[0]?.meanings[0]?.partOfSpeech}</p>
                    <p>${(data[0]?.phonetic) ? (data[0]?.phonetic) : (" ")}</p>
                </div>

                <div class="meaning">
                    ${(data[0]?.meanings[0]?.definitions[0]?.definition || "") }
                </div>

                <div class="example">
                    ${(data[0]?.meanings[0]?.definitions[0]?.example || "")}
                </div>
                `;

                sound.setAttribute("src", `${data[0].phonetics[0].audio}`) 
                console.log(sound);
        }).catch(()=>{
            result.innerHTML = `<h1 style="text-align : center">Coundn't Find the Word</h1>`
        })
})

function playsound(){
    sound.play();
}