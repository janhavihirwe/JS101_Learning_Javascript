var data={
  name:['Rice','Dal','Salt'],
  quantity:[2,3,1],
  price:[60,50,20],

  total:function(){
    var sum=0;
    for(var i=0;i<this.quantity.length;i++){
      sum=sum+(this.quantity[i]*this.price[i]);
    }
    console.log(sum);
  }
}
data.total();