function lastindex(arr,element){
var bag="";
 for(var i=0;i<arr.length;i++){
   if(arr[i]===element){
     bag=i;
   }
  }
  console.log(bag);
}
lastindex([1,2,4,2,3],3);