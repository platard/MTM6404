// Week-1
// 1. Declare the function 'isEven' that receives one parameter. Return 'true' if the provided number is even, or 'false' if not.

//Hints
// if a number can be evenly divided by 2 (remainder is 0)
// % modulus - returns the remainder

function isEven(number){
    if(number % 2 == 0){
        return 'is true'
    }else {
        return false
    } 
}

console.log(isEven(13))


//2. Declare the function 'isPrime' that receives one parameter. if is prime return 'true', if not return 'false'

//Hints
  // a prime number can only be divided evenly by 1 and itself.
  // Use 'modulus' operator to check if remainder is 0
  // loop over each number below the provided number

  const evenlyDivided = []

  function isPrime(number){
    for(let i=0; i < number+1; i++){
        if(number % i == 0){
            evenlyDivided.push(i)
        }
    }
    console.log(evenlyDivided)
    if(evenlyDivided.length > 2 ){
        return 'This is not a prime number'
    }else{
        return 'This is a Prime number'
    }
  }

  console.log(isPrime(13))