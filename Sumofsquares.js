//Write a Javascript Program to find the sum of squares of the elements of an array
var arr1=[2,3,4,5,6]
var sum =0;
for (let i=0; i<arr1.length; i++){
    let sqrt=(arr1[i])*(arr1[i]);
    sum=sum+sqrt;
    
}
console.log(sum);
