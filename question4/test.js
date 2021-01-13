const { sumNum, addNum } = require('./main');


//////////////////////////////////////
// solution 1 test
test('sumNum function is defined', () => {
    expect(typeof sumNum).toEqual('function');
});

describe("sumNum", () => {
    it("returns the number in a string", () => {
        expect(sumNum("0utSystem5")).toEqual(5);
    });
    it("returns the sum of two numbers in a string", () => {
        expect(sumNum("0utSyst3m5")).toEqual(8);
    });
 it("returns the sum of several numbers in a string", () => {
        expect(sumNum("0ut5yst3m5")).toEqual(13);
    });
 });


//////////////////////////////////////
// solution 2 test
test('addNum function is defined', () => {
    expect(typeof addNum).toEqual('function');
});

describe("addNum", () => {
    it("returns the number in a string", () => {
        expect(addNum("0utSystem5")).toEqual(5);
    });
    it("returns the sum of two numbers in a string", () => {
        expect(addNum("0utSyst3m5")).toEqual(8);
    });
 it("returns the sum of several numbers in a string", () => {
        expect(addNum("0ut5yst3m5")).toEqual(13);
    });
 });