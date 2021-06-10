document.addEventListener("DOMContentLoaded",()=>{



    let homme = document.querySelector(".uno")
    let femme = document.querySelector(".deux")
    let main = document.querySelector("main")
    homme.addEventListener("click",()=>{
        homme.classList.toggle("homme")
        main.classList.toggle("main")
        femme.classList.toggle("femme")
        console.log(femme)
        document.location.href="https://hollyghost.fr/fr/11-homme";
    })


    femme.addEventListener("click",()=>{
        document.location.href="https://hollyghost.fr/fr/3-femme";

        homme.classList.toggle("homme1")
        main.classList.toggle("main")
        femme.classList.toggle("femme1")
        

    })
}) 