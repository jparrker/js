let map = { one: true, two: true, hasOwnProperty: true };

console.log(hasOwnProperty.call(map, "one"));

//method.call(object, "key")
