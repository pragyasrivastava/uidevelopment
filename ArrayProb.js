//"Print Reverse"
function printReverse(arr){
  for (var i=arr.length-1;i>=0;i--)
  {
    console.log(arr[i]);
  }
}
//Sum Array
function sumArray(arr){
   var total=0;
   arr.forEach(function(element)
 {
   total+= element;
 });
 return total;
}
//Is Uniform
function isUniform(arr){
  var first= arr[0];
  for(var i=1;i<arr.length;i++)
  {
    if(arr[i]==first){
      return false;
    }
  }
  return true;
}
//Max in an array
function max(arr){
  var max=arr[0];
  for(var i=1;i<arr.length;i++){
    if (arr[i]>max)
    {
      max=arr[i];
    }
  }
  return max;
}
