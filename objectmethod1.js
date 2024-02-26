let arr = [10, 24, 56, 72, -10, -88, 100, 564];
var sum=0;
var count=0;
arr.forEach(function(element,index){
  if(index%2!==0){
    sum=sum+element;
    count++;
  }
});
var average=sum/count;
console.log(average);