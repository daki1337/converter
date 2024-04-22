//get elements
const convertButton = document.getElementById("convert-button")
const convertInput = document.getElementById("convert-input")
const resultDisplay = document.querySelector(".result")

//pressing the button starts the function
convertButton.addEventListener("click", () => {
    getAudio()
})

async function getAudio() {
    //create an ID
    let link = convertInput.value
    const re = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    let videoID = link.match(re)
    let result
    //use radipAPI
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID[2]}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2bf8bf6232mshfd7971158f87b8dp17bc08jsn9c6519cdd5d1',
            'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
    };
    //send a request
    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    resultDisplay.innerHTML = `<p class = "title">Title: ${result.title}</p>`
        //Download link
        setTimeout(() => {
            window.open(result.link, "_blank")
        }, 1000)
    }