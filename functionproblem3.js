function isOdd(i){
  if(i%2==0){
    return false;
  }
  else{
    return true;
  }
}
for(var i=0;i<=10;i++){
  var x=isOdd(i);
  if(x){
    console.log(i);
  }
  
}

