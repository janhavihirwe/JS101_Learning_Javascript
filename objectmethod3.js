var arr=[3,4,5,6,7];
var bag="";
arr.forEach(function(item,index){
  if(index%2==0){
    bag=bag+item;
  }
});
console.log(bag.split('').join("-"));