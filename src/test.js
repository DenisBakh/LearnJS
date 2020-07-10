describe("pow", function () {

	describe("возводит x в степень 3", function () {

		for (let x = 1; x <= 5; x++) {
			makeTest(x);
		}

		function makeTest(x) {
			let expected = x * x * x;
			it(`${x} в степени 3 будет ${expected}`, function () {
				assert.equal(pow(x, 3), expected);
			});
		}

	});

	describe("возвоздит x в степень n", function () {

		for (let x = 0; x <= 5; x++) {
			for (let n = 0; n <= 5; n++) {
				let expected = 1;
				for (i = 1; i <= n; i++) {
					expected *= x;
				}
				it(`${x} в степени ${n} будет ${expected}`, function () {
					assert.equal(pow(x, n), expected)
				});
			}
		}

	});

	it("если n - отрицательное число, результат будет NaN", function () {
		assert.isNaN(pow(2, -1));
	});

	it("если n не число, результат будет NaN", function () {
		assert.isNaN(pow(2, 1.5));
	});

});