# Just some cool shortcuts

## Finding minimum

```js
console.log( Math.min.apply(null,[1,2,3,4,0]) );
//this will log 0
``` 

Note:  We can find max by replacing min with max.  

## Number of Object Keys

For-loops can be used here to increment a variable to determine number of keys.  

But here is the short-cut:

```js
var obj ={
	test1:10, test2:9, test3:8
};

console.log(Object.keys(obj).length);
//it will log 3
```

## Comparing string and objects

For this we simply cannot use the === notation.  It will not work!

So for this, compare objects using JSON.stringify:

```js

var array1 = [1,2,[]];
var array2= [1,2,[]];

console.log(array1===array2); 
//despite they're equal, this will log FALSE

console.log( JSON.stringify(array1)===JSON.stringify(array2) );
//using JSON.stringify, we will get the right answer: TRUE!  

```

## .forEach()

We can use this to avoid for-loops for arrays.

Example:  log all elements of the array

```js
var array = [1,2,3,4,5,6,7,8,9,10];

array.forEach(function(element){
  console.log(element);
});

``` 

## .filter()

Very useful for copying arrays that needs to be filtered first.  Again, we get to avoid for-loops.

Example:  copy elements that are odd

```js
var array = [129,1232,2121,3434,344,102130];

var array2 = array.filter(function(element){
  if (element%2 === 0){
  	return false;
  }else{
  	return true;
  }  
});

console.log(array2); //this will log [129, 2121] 

```

## to check what type it is (except for array because Array.isArray is needed)

use typeof() method

