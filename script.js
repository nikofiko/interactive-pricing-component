const monthlyCost = document.querySelector(".cost")
const input = document.getElementById("myinput")
const inputSwitch = document.getElementById("toggle-switch")
const h3 = document.querySelector(".ways")
let clicked = 0

input.addEventListener("click", () => {
    if(clicked === 0){
        monthlyCost.innerHTML = `$${input.value}.00`
        console.log("a", clicked)
    }else if(clicked === 1){
        monthlyCost.innerHTML = `$${input.value * 12}.00`
        console.log("b", clicked)
    }

})

input.addEventListener("touchstart", () => {
    if(clicked === 0){
        monthlyCost.innerHTML = `$${input.value}.00`
        console.log("a", clicked)
    }else if(clicked === 1){
        monthlyCost.innerHTML = `$${input.value * 12}.00`
        console.log("b", clicked)
    }

})

inputSwitch.addEventListener("click", ()=> {
    if(h3.textContent.includes("/month")){
        monthlyCost.innerHTML = `$${input.value * 12}.00`
        h3.textContent = "/year"
        clicked = 1
    }else if(h3.textContent.includes("/year")){
        h3.textContent = "/month"
        clicked = 0
    }
})