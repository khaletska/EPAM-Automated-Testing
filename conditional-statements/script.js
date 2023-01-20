let str = 'string';
let bool = true;
let num = 14;

//addition
console.log('ADDITION');
let strPlsBool = str + bool;
console.log(strPlsBool);
let strPlsNum = str + num;
console.log(strPlsNum);
let numPlsBool = num + bool;
console.log(numPlsBool);

//multiplication
console.log('MULTIPLICATION');
let strXBool = str * bool;
console.log(strXBool);
let strXNum = str * num;
console.log(strXNum);
let numXBool = num * bool;
console.log(numXBool);

//division
console.log('DIVISION');
let strDivBool = str / bool;
console.log(strDivBool);
let strDivNum = str / num;
console.log(strDivNum);
let numDivBool = num / bool;
console.log(numDivBool);

//conversion
console.log('CONVERSION');
let convToNum = '1234567';
let convToStr = 1111111;
let convStrToBool = 'anyword';
let convNumToBool = 0;

console.log(Number(convToNum));
console.log(String(convToStr));
console.log(Boolean(convStrToBool));
console.log(Boolean(convNumToBool));