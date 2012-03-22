# PrePost

Small library that fires 'before' (pre) and 'after' (post) events when methods are called.

## Dependencies:

[aspectos](https://github.com/lawrencec/aspectos)
[bean](https://github.com/fat/bean)

## Usage:

```javascript
var myObj = {
    foo  = function() {};
}

myObj.foo = preposterous.pre(function,
```

