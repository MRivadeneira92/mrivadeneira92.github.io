
document.onload = (event) => {
    let btnSubmit = document.querySelector("#btn-form-submit")
    btnSubmit.addEventListener("click", function(e) {
        console.log("Clack!");
    }) 
}
let btnMenu = document.getElementById("#btn-menu");



function selectOption() {


}

var form = document.querySelector('#form-RSVP'),
    url = 'https://script.google.com/macros/s/AKfycbwY5CfUC1niDgsQgwXYJ15fKvjR9jYTRG57aRahITVZv1_1szIXkOYTwjqli97WYX0l/exec'

document.querySelector("#btn-form-submit").addEventListener('click', function(e) {
    console.log("Click!")
    e.preventDefault();
    var jqxhr = $.ajax({
        
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }
    ).success(
        // do something
    );
    })

function showMenu() {
    let navMenu = document.querySelector("#nav-menu");
    
    if (navMenu.style.display == "block") {
        navMenu.style.display = "none";
    } else {
        document.querySelector("#nav-menu").style.display = "block";
    }
}

