describe("power", function() {

    describe("возводит x в степень n", function() {
        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(power(x, 3), expected);
            });
        }
        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("power", function() {
        it("при возведении в отрицательную степень результат NaN", function() {
            assert(isNaN(power(2, -1)), "power(2, ‐1) не NaN");
        });
        it("при возведении в дробную степень результат NaN", function() {
            assert(isNaN(power(2, 1.5)), "power(2, 1.5) не NaN");
        });
    });
    // ... дальнейшие тесты it и подблоки describe ...
});