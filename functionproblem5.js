function lowecase(x){
  var a=x.toLowerCase();
  return a;
}
function lowercase(arr){
  var lowerCaseArray = arr.map(arr => lowecase(arr));
  return lowerCaseArray;
}
var str="MASAI";
var x=lowecase(str);
console.log(x);
var str="M";
var x=lowecase(str);
console.log(x);
var str=["MA", "SA", "I", "SCH", "OOL"];
var x=lowercase(str);
console.log(x);
