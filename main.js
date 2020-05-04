function power(number, pow) {
    if (pow < 0) return NaN;
    if (Math.round(pow) != pow) return NaN;
    var result = number;
    for (i = 1; i < pow; i++) {
        result = result * number;
    }
    return result;
}