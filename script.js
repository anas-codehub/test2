const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounterE1 = document.getElementById("remaining-counter");

function updateCounter(e) {
    const totalCharacters = textareaE1.value.length;
    const maxLength = parseInt(textareaE1.getAttribute("maxLength"));
    
    totalCounterE1.innerText = totalCharacters;
    remainingCounterE1.innerText = maxLength - totalCharacters;
    console.log(e.key);
    
}

textareaE1.addEventListener("keyup", updateCounter);

updateCounter();
console.log("Developed by Talat Mahmud Anas");
console.log("GitHub: https://github.com/anas-codehub");
