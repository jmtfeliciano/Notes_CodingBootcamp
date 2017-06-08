# Dealing with arrays

Just general notes to remember about arrays

## Determining whether an argument is an array

Using the typeof() method on arrays will return an object.
So how do we get around it?

Use Array.isArray() method:  

```
var array1 = [1,2,3,4];
console.log( Array.isArray(array1) );
//it will print true!  
```

## Manipulating ends of array

### Beginning of array 

.shift() and .unshift() methods:
```
var array1 = [1,2,3,4];
array1.shift(); 
//console.log(array1) will print [2,3,4]

var array2 = ['a','b','c','d'];
array2.unshift('1'); 
//console.log(array2) will print ['1','a','b','c','d'];
```

### Ending of array 

.push(arg) and .pop() methods:
```

var array1 = [1,2,3,4];
array1.push('a'); 
//console.log(array1) will print [1,2,3,4,'a']

var array2 = ['a','b','c','d'];
array2.pop(); 
//console.log(array2) will print ['a','b','c'];
```

## Combining arrays

.concat method:

```
var array1 = [1,2,3,4];
var array2 = ['a','b','c'];
var combinedArray = array1.concat(array2);  
//console.log(combinedArray) will print [1,2,3,4,'a','b','c'];
```

## Cutting elements of arrays

Note about .slice():  It will not modify the original array you're slicing from
Note 2:  .slice() can be very tricky!  Slow-down when using this.  

If only passing one argument to .slice():

```
var array1 = [1,2,3,4];
var slicedArray = array1.slice(1);  
//console.log(slicedArray) will print [2,3,4];
//logic: slice CUTS 1 element from the LEFT

var array2 = [1,2,3,4];
var slicedArray = array2.slice(-1);  
//console.log(slicedArray) will print [4];
//logic: slice KEEPS 1 element from RIGHT
```

If only passing two arguments to .slice():

```
var array1 = ['a','b','c','d'];
var slicedArray = array1.slice(0,2);  
//console.log(slicedArray) will print ['a','b']
//logic: slice(0,2) cuts from array[0] until to the left of array[2] (exclusing array[2])
```

