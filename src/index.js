module.exports = function getZerosCount(number) {
    // your implementation
    var num = number;
    var result = 0;
    var i = 0;
    while (num > Math.pow(5, i)) {
        i++;
        console.log(Math.pow(5, i));
        result = result + Math.floor(num / Math.pow(5, i));
    }
    return result;
}
