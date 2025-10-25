let names = ["tony", "bruce", "natasha", "steve", "peter"];
let [first, second, third, ...others] = names;
console.log(first);
console.log(second);
console.log(third);
console.log(others);
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "science"],
    username: "karan@mail.com",
    password: "abcde"
};
let {username: user, password: pass} = student;
console.log(user);
console.log(pass); 