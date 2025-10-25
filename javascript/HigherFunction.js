function multipleGreet(func, count) {
    for(let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}
function oddEvenTest(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if(request == "even") {
        let even = function(n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else {
        console.log("invalid request");
    }
}
multipleGreet(greet, 3);
let request = "odd";
let func = oddEvenTest(request);
func(3);
func(6);