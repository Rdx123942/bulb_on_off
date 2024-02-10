// Selection of an Element
// Changing HTML
// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"

// Changing CSS
// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor = 'black'

// Event Listener
// var a = document.querySelector("h1")

// a.addEventListener("click", function(){
//     a.innerHTML = 'kaise hei app log'
//     a.style.color = 'red'
//     a.style.backgroundColor = 'Black'})
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0
btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        flag = 0
    }
    
})


