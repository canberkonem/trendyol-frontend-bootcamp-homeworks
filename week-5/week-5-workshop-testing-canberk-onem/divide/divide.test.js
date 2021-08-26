const divide = require('./divide');


test('divide 4 / 2 to equal 2', () => {
  const num1 = 4
  const num2 = 2

  expect(divide(num1, num2)).toBe(2);
});

test("divisor should be bigger than zero",() => {
    const num1 = 2
    const num2 = 0
    expect(() => divide(num1, num2)).toThrow("divisor should be bigger than zero")
})

test('both parameters should be number', () => {
    const num1 = 4
    const num2 = "2"
    expect(()=> divide(num1,num2)).toThrow("Both parameters should be number")
})

