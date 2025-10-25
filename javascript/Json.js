let jsonData1 = '{"fact":"The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high.","length":120}';
console.log(jsonData1);
let validData1 = JSON.parse(jsonData1);
console.log(validData1);
let validData2 = {
    name: "siddharth",
    marks: 94
};
console.log(validData2);
let jsonData2 = JSON.stringify(validData2);
console.log(jsonData2);