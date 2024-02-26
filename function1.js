function join(arr,char){
  var bag="";
  for(var i=0;i<arr.length;i++){
    if(i==arr.length-1){
      bag=bag+arr[i];
    }else{
      bag=bag+arr[i]+char;
    }
  }
  console.log(bag);
}
var arr=['Janhavi','Hirwe'];
join(arr,'-');