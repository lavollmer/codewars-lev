function lovefunc(flower1, flower2){
  // moment of truth
  // TRUE = flower1 EVEN AND flower2 ODD
  // FALSE = flower1 ODD AND flower2 ODD
  // FALSE = flower1 EVEN AND flower2 EVEN
  // TRUE = flower1 ODD AND flower2 EVEN

  //modulus divides and it is even if the modulus returns zero
 function isEven(flower){

    return flower % 2 === 0;
  }
  
   //modulus divides and it is odd if the modulus returns anything other zero
function isOdd (flower){

    return flower % 2 !== 0;
  }
  
  //if else statement ==> if flower1 is true and flower2 is true

  if (isEven(flower1) && isOdd(flower2)) {
    return true;
  } else if (isOdd(flower1) && isEven(flower2)) {
    return true;
  } else {
    return false;
  }