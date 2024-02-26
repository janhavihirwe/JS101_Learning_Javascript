function exist(arr,element){
  var count=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==element){
      count++;
    }
  }
  if(count>0){
    return true;
  }
  else{
    return false;
  }
}
var result=exist([1,2,3,4,5],5);
console.log(result);
var result=exist([1,2,3,4,5],6);
console.log(result);