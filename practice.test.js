const {capitalize, reverseString, calculator, ceasarCipher, analyseArray} = require('./practice.js');

test('First character is capital', function() {
    expect(capitalize('sun')).toBe('Sun');
});

test('Reversed word', function(){
    expect(reverseString('mad')).toBe('dam');
});

test('sum of numbers', function(){
    expect(calculator.Add(1, 2)).toBe(3);
});

test('subtract numbers', function(){
    expect(calculator.Subtract(1, 2)).toBe(-1);
});

test('divide numbers', function(){
    expect(calculator.Divide(2, 2)).toBe(1);
});

test('multiply numbers', function(){
    expect(calculator.Multiply(1, 2)).toBe(2);
});

test('wrapping', function(){
    expect(ceasarCipher('xyz', 3)).toBe('abc');
});

test('case preservation', function(){
    expect(ceasarCipher('HeLLo', 3)).toBe('khoor');
});

test('object', function(){
    
    
    expect(analyseArray([1, 2, 3, 4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4 
    });
});