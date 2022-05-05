sign = document.getElementById ("pressing")
popup = document.getElementById ("popup")
sign.addEventListener ('click', function (){
    popup.classList.add("active_popup") 
})

let close = document.querySelector (".cross")
close.addEventListener ('click', function (){
    popup.classList.remove("active_popup")
})

home = document.getElementById ("homework_btn")
page = document.getElementById ("page")
home.addEventListener ('click', function (){
    page.classList.add("page_activ") 
})

closeA = document.querySelector (".attendabce_btn")
closeA.addEventListener ('click', function (){
    page.classList.remove("page_activ")
})