function sum(...args) {
    return args.reduce(function(sum, element) {
        return sum + element;
    });
}
console.log(sum(1, 2, 3, 4));