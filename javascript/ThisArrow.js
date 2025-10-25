const student = {
    name: "aman",
    marks: 95,
    getName: function() {
        return this.name;
    },
    getMarks: () => {
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log("first info");
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log("second info");
        }, 3000);
    }
};
console.log(student.getName());
console.log(student.getMarks());
student.getInfo1();
student.getInfo2();