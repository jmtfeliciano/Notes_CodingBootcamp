# Dealing with arrays

Just general notes to remember about arrays

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
