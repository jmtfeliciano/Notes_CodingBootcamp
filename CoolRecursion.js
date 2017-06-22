//suppose we have a chain of arrays within arrays with numbers, how to we get the sum?

var array1 = [1,[1,2],[3,[1,2],[5]]];

function sumArray(array){

	if( typeof(array) === 'number'){
  	return array;
  }else{
  	var sum = 0;
    
  	for(var i =0;i<array.length;i++){
    	sum += sumArray(array[i]);
    }
    return sum;
  }
 
}

console.log(sumArray(array1));
