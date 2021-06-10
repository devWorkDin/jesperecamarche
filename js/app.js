document.addEventListener("DOMContentLoaded",()=>{



    let homme = document.querySelector(".uno")
    let femme = document.querySelector(".deux")
    let main = document.querySelector("main")
    homme.addEventListener("click",()=>{
        homme.classList.toggle("homme")
        main.classList.toggle("main")
        femme.classList.toggle("femme")
        console.log(femme)
    })


    femme.addEventListener("click",()=>{
        homme.classList.toggle("homme1")
        main.classList.toggle("main")
        femme.classList.toggle("femme1")

    })
}) 