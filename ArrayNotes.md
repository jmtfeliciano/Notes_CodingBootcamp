# Dealing with arrays

Just general notes to remember about arrays

## Determining whether an argument is an array

Using the typeof() method on arrays will return an object.
So how do we get around it?

Use Array.isArray() method:  

```js
var array1 = [1,2,3,4];
console.log( Array.isArray(array1) );
//it will print true!  
```

## Manipulating ends of array

### Beginning of array 

.shift() and .unshift() methods:
```js
var array1 = [1,2,3,4];
array1.shift(); 
//console.log(array1) will print [2,3,4]

var array2 = ['a','b','c','d'];
array2.unshift('1'); 
//console.log(array2) will print ['1','a','b','c','d'];
```

### Ending of array 

.push(arg) and .pop() methods:

```js

var array1 = [1,2,3,4];
array1.push('a'); 
//console.log(array1) will print [1,2,3,4,'a']

var array2 = ['a','b','c','d'];
array2.pop(); 
//console.log(array2) will print ['a','b','c'];
```

## Combining arrays

.concat method:

```js
var array1 = [1,2,3,4];
var array2 = ['a','b','c'];
var combinedArray = array1.concat(array2);  
//console.log(combinedArray) will print [1,2,3,4,'a','b','c'];
```

## Removing and adding chunks of array elements

WARNING 1:  .slice() does not modify the passed argument.  It will return an array with the slices component

WARNING 2:  .splice() will modify the passed argument.

WARNING 3:  array.slice(1,3) will return the array [array[1],array[2]]

WARNING 4:  array.splice(1,3) will modify array.  And deletes array[1],array[2],array[3] from array


### .slice() method: Only removing elements of arrays.  


If only passing one argument to .slice():

```js
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

```js
var array1 = ['a','b','c','d'];
var slicedArray = array1.slice(0,2);  
//console.log(slicedArray) will print ['a','b']
//logic: slice(0,2) cuts from array[0] until to the left of array[2] (exclusing array[2])
```

### .splice() method:  Removing then adding!

We can add but first, we will remove only to highlight diffence between splice and slice.

```js
var exesName = ['John', 'Janine', 'Jennifer', 'Mark'];
exesName.splice(0,3);
console.log(exesName);
//It will print ['Mark']

```

WARNING (again):  array.slice(1,3) will return the array [array[1],array[2]]

WARNING (again):  array.splice(1,3) will modify array.  And deletes array[1],array[2],array[3] from array


Now, let's do some deleting and adding.
For instance, you want to forget about Janine.  And add another ex named Josephine:
```js
var exesName = ['John', 'Janine', 'Jennifer', 'Mark'];
exesName.splice(1,1,'Josephine'); 
//index1, from that given index we will delete 1, and add Josephine
console.log(exesName);
//It will print ['John', 'Josephine', 'Jennifer', 'Mark']

```

