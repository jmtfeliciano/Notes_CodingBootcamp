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


