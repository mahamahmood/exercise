///////////////////////
///// question 4 /////
// func accepts a string and returns sum of num chars
// two different implementations
// 1) using a loop
// 2) no loop maybe if statement or recursion
// (Example: input - ‘0ut5yst3m5’; result - 13)

////////////////////////////////////
//// solution 1 - using loop //// 
// convert the string to an array
// loop through the array
// if a number, add it to sum

function sumNum (str){
    let sum = 0;
    let strArr = str.split('');
    // console.log(strArr);

    for(let char in strArr) {
        if(!isNaN(strArr[char])) {
            sum += parseInt(strArr[char]);
        }
    }
    // console.log(sum);
    return sum;
}
sumNum('0ut5yst3m5');

//////////////////////////////////////
//// solution 2 no loop //// 
// get nums only from the string with regular expressions
// convert arr to integers
// sum the arr using reduce method 

function addNum(str){
    const regExpArr = str.match(/\d/g);
    // console.log(regExpArr);

    const intArr = regExpArr.map(i => Number(i));
    // console.log(intArr);

    const sum = intArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // console.log(sum);
    return sum;
}
addNum('0ut5yst3m5');


module.exports = { sumNum, addNum };