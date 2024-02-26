var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

var obj={
  data:sales,

  calculateSalesTotal:function(){
    var arr=[];
    for(var i=0;i<this.data.length;i++){
      var obj={};
      if(this.data[i].discount==undefined){
        obj.item=this.data[i].item;
        obj.original=this.data[i].original;
        obj.sale=this.data[i].original;
        obj.stock=this.data[i].stock;
        obj.total=this.data[i].original*this.data[i].stock;
        arr.push(obj);
      }
      else{
        obj.discount=this.data[i].discount;
        obj.item=this.data[i].item;
        obj.original=this.data[i].original;
        obj.sale=this.data[i].original-(this.data[i].original*this.data[i].discount);
        obj.stock=this.data[i].stock;
        obj.total=obj.sale*this.data[i].stock;
        arr.push(obj);
      }
    }
    console.log(arr);
  }
}
obj.calculateSalesTotal();