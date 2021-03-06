/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(aa){
  return aa.toString()
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function increase(bb){
  return bb+=1
 }


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(cc){
  return cc-=1
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(aa, bb){
  return aa+bb
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subtract(aa,bb){
  return aa-bb
 }


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(aa, bb){
  return aa*bb
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(aa,bb){
  return aa/bb
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 function square(aa){
  return aa*aa
 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation, aa, bb){
  if (operation === "add"){
    console.log(aa + " " + "+" + " " + bb + " " + "=" + " " + (aa+bb));
    return aa + bb;
  }
  if (operation === "subtract"){
    console.log(aa + " " + "-" + " " + bb + " " + "=" + " " + (aa-bb));
    return aa - bb;
  }
  if (operation === "multiply"){
    console.log(aa + " " + "*" + " " + bb + " " + "=" + " " + (aa*bb));
    return aa*bb;
  }
  if (operation === "divide"){
    console.log(aa + " " + "/" + " " + bb + " " + "=" + " " + (aa/bb));
    return aa/bb;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(aa, bb){
  if (aa>bb){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(aa,bb){
  if(aa<bb){
    return true;
  }else{
    return false;
  }
}


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(aa,bb){
  if(aa === bb){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 function minimum(aa,bb){
  if(aa<bb){
    return aa;
  }else{
    return bb;
  }
 }


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(aa,bb){
  if(aa>bb){
    return aa;
  }else{
    return bb;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(aa){
  if(aa%2===0){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(aa){
  if(aa%2!==0){
    return true;
  }else{
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 function letterGrade(score,total){
  aa = (score/total)*100;
  if(aa>=90){
    return "A";
  }else if(90>aa && aa>=80){
    return "B";
  }else if(80>aa && aa>=70){
    return "C";
  }else if(70>aa && aa>=60){
    return "D";
  }else if(60>aa){
    return "F";
  }
 }


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(restaurant){
  if(restaurant.reviews){
    restaurant.reviews+=1;
  }else{
    restaurant.reviews=1;
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(aa,bb){
  return aa +  " " + bb;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  circle = {circumference : (2 * Math.PI * radius), area : (Math.PI * radius*radius)};
  return circle;
}


