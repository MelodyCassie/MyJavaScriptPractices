function findFactorial(n) {
    function check(allPositiveIntegers, history){
        if(n < 1){
           return "....."
        }
        if (n > allPositiveIntegers){
          return findFactorial(n * n, `(${history} * n)`);
        }



    }



}
console.log(findFactorial(5))