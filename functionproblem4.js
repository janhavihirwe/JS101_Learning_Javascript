function average(arr){
  var sum=0;
  if(arr.length==0){
    return 0;
  }
  for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
  }
  return sum/arr.length;
}
var arr=[];
var x=average(arr);
console.log(x);
var arr=[1,2,3,4,5];
var x=average(arr);
console.log(x);
