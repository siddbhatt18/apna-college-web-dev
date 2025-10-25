let btn = document.querySelector("button");
btn.addEventListener("click", async function() {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    }
    catch(error) {
        console.log(error);
        return "no fact found";
    }
}
getFacts();