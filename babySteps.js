var sum = 0;

function sumArgs() {
    if (typeof process.argv[2] == 'undefined') return sum;
    else sum += Number(process.argv.pop());
    return sumArgs();
}
// figured everyone will submit it with a for loop
// started from the end to shorten the line of codes
console.log(sumArgs());