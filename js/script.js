var cocktailBtn = document.querySelector("#comics-and-cocktails");
var drinkImg = document.querySelector("#drink-img");
var comicImg = document.querySelector("#comic-img");

// uses JavaScript Classes to build clock
class DigitalClock {
    constructor(element) {
        this.element = element;
    } 

    // starts the clock on load and updates the time every half second.
    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }

    // formats the information and places it on the page
    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }
    // uses JavaScript date to get the current time
    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

    function cocktailCall(){
        var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        fetch(apiUrl)
        .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error("Response Error");
    }
    })
        .then(data => {
        console.log(data);
        setDrinkImage(data);
    })
        .catch((error) => console.error("Error code:", error));
    };

    function setDrinkImage(drinkUrl){
        const drink = drinkUrl.drinks[0];
        drinkImg.src = drink.strDrinkThumb;

    }

    function comicCall(){
        var apiUrl = "https://xkcd.com/614/info.0.json";

        fetch(apiUrl)
        
        .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error("Response Error");
    }
    })
        .then(data => {
        console.log(data);
        setComicImage(data);
    })
        .catch((error) => console.error("Error code:", error));
    };

    function setComicImage(comicUrl){
        comicImg.src = comicUrl.img;
        console.log(comicUrl.img);

    }

  cocktailBtn.addEventListener("click", function(){
    
    cocktailCall();

    comicCall();

  })

  
  //http://comicvine.gamespot.com/api/character/?api_key=30a0f6a5f46e4554af8e4d7c802a69e3bfee0a4f&field_list=garfield

