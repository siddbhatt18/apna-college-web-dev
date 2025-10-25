let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("form submitted");
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log("username = " + user.value);
    console.log("password = " + pass.value);
});