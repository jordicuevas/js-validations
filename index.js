// check if string is empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

console.log(isEmpty("Hello World!")); //false
console.log(isEmpty("")); //true

// check if string is blank

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

console.log(isBlank("Hello World! ")); // false
console.log(isBlank("")); // true
