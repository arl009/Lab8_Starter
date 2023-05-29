// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('10 digit phone number', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});
test('10 digit phone number with parentheses', () => {
    expect(functions.isPhoneNumber('(000)-000-0000')).toBe(true);
});
test('random characters', () => {
    expect(functions.isPhoneNumber('asdasdf')).toBe(false);
});
test('1 digit phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});

// matches valid emails
test('ucsd email', () => {
    expect(functions.isEmail('arl009@ucsd.edu')).toBe(true);
});
test('gmail', () => {
    expect(functions.isEmail('arl009@gmail.com')).toBe(true);
});
test('random characters', () => {
    expect(functions.isEmail('asdasdf')).toBe(false);
});
test('missing characters', () => {
    expect(functions.isEmail('arl009ucsd.edu')).toBe(false);
});

  
  /**
   * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
   */

test('underscores password', () => {
    expect(functions.isStrongPassword('a__sdfgh')).toBe(true);
});
test('mixed cases', () => {
    expect(functions.isStrongPassword('asFGSs')).toBe(true);
});
test('not long enough', () => {
    expect(functions.isStrongPassword('as')).toBe(false);
});
test('random symbols', () => {
    expect(functions.isStrongPassword('??????')).toBe(false);
});

  
  // 	This regular expressions matches dates of the form XX / XX / YYYY where 
  // XX can be 1 or 2 digits long and YYYY is always 4 digits long.
  
test('1 character month day', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
test('2 character month day', () => {
    expect(functions.isDate('22/22/2222')).toBe(true);
});
test('too long month', () => {
    expect(functions.isDate('22/222/2222')).toBe(false);
});
test('too long day', () => {
    expect(functions.isDate('222/22/2222')).toBe(false);
});

  // Matches valid 3 or 6 character hex codes used for HTML or CSS.

test('3 characters', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});
test('6 characters', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('4 characters', () => {
    expect(functions.isHexColor('#0000')).toBe(false);
});
test('too many #', () => {
    expect(functions.isHexColor('##000')).toBe(false);
});