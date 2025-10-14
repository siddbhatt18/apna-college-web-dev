const student = {name: "rahul", age: 23, marks: 94, city: "delhi"};
console.log(student);
student.city = "mumbai";
student.gender = "male";
delete student.marks;
console.log(student);