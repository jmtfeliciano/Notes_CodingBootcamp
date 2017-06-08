# Dealing with strings

Just general notes to remember about strings

## Converting string to arrays

Sometimes, it is easier to convert each character of a given string into an array of characters

.split(separator) method:

```js
var string = "a,b,c,d,e,f";
var array1 = string.split(",");
console.log(array1);  
//prints ["a", "b", "c", "d", "e", "f"]
```

## Finding a specific character

You want to locate a specific character in a string.  
While you can use .split() and traverse each element, that seems wasteful computationally.

Here, indexOf(char) is very useful!

```js
var str = "alamo";
console.log( str.indexOf("l") );
//it will print 1 since l is in index 0 of the given array
```

Note:  indexOf() finds the index of the very first instance.  

Note 2:  If nothing matches, it will return -1.  This is very useful specially in while-loops! 







