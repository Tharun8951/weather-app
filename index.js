const temperateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "london";

const fetchdata = async (target)=>{
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=3cbfdb5bf4c047c59e362222230504&q=${target}`

        const response = await fetch(url)
        const data = await response.json()

        updateDom(data.current.temp_c, data.location.name, data.location.localtime, data.current.condition.icon, data.current.condition.text)
    } catch (error) {
        alert("Spelling Mistake")
    }
}

function updateDom(temp, city, date, emoji, condition) {
    temperateField.innerText = temp
    cityField.innerText = city
    dateField.innerText = date
    emojiField.src = emoji
    weatherField.innerText = condition
}

fetchdata(target)

const search = (e)=>{
    e.preventDefault()

    target = searchField.value
    fetchdata(target)
}

form.addEventListener("submit", search)