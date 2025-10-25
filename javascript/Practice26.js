let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.append(delBtn);
    ul.append(item);
    console.log(input.value);
    input.value = "";
});
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
});