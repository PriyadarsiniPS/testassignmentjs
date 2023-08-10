//Write a javascript program to find the most frequent element in an array 
var arr1=[2,3,2,4,5,6,4,7];
var mf=1;
var m=0;
var item;
for (var i=0;i<arr1.length;i++)
{
    for (var j=1;j<arr1.length;j++)
{
    if(arr1[i]==arr1[j])
    m++;
    if (mf<m)
    {
        mf=m;
        item=arr1[i];
    }
}
m=0;
}
console.log(item+"(" +mf + "times)");
