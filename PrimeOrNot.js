//Write a JavaScript function to get an array and to read the first element of an array.Check whether it is prime or not.
var arr1=[2,3,4,5,6];
function test_prime(num){
    if(num %2===0|| num<2){
        return false;
    }
    for(let i=3;i<=Math.sqrt(num);i++){
        if(num%i===0){
        return true;    

console.log(num,"Is a Prime Number");
        }
    }
console.log(num,"Is not Prime Number");
    }
    console.log(test_prime(arr1[2]));