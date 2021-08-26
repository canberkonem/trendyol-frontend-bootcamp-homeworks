const setUpperCase = require('./setUpperCase');


test('first letters of words in title should be uppercase ', () => {
    const title = "this is a test title."
    expect(setUpperCase(title)).toBe("This Is A Test Title.")
})

test('should not set uppercase for "and" "to" words', () => {
    const title = "the following words should be always lower cased: or and"
    expect(setUpperCase(title)).toBe("The Following Words Should Be Always Lower Cased: or and")
})


test('should return empty string when input is empty', () => {
    const input = ""
    expect(setUpperCase(input)).toBe("")
})

