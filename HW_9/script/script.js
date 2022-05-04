sign = document.getElementById ("pressing")
popup = document.getElementById ("popup")
sign.addEventListener ('click', function (){
    popup.classList.add("active_popup") 
})

let close = document.querySelector (".cross")
close.addEventListener ('click', function (){
    popup.classList.remove("active_popup")
})