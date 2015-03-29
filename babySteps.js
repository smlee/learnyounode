var sum = 0;

function sumArgs() {
    if (typeof process.argv[2] == 'undefined') {
        return sum;
    } else {
        sum += Number(process.argv.pop());
        sumArgs();
    }

    return sum;
}

console.log(sumArgs());