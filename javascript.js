
window.addEventListener("load", function(){
    const form = document.querySelector('#form-RSVP')
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(form);
        const action = event.target.action;
        fetch(action, {
            method: "POST",
            body: data,
        })
        .then(() => {
            alert("Success");
        })
    })
})

let btnMenu = document.getElementById("#btn-menu");

function selectOption(lugar) {
    document.querySelector(`#${lugar}`).click() 
}

function showMenu() {
    let navMenu = document.querySelector("#nav-menu");
    
    if (screen.width < 800){
        if (navMenu.style.display == "block") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "block";
        } 
    }
}

