function divide(num1, num2) {
    if(num2<=0){
        throw new Error("divisor should be bigger than zero")
    } 

    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw new Error("Both parameters should be number")
    }
    
    return num1 / num2;
  }
  module.exports = divide;