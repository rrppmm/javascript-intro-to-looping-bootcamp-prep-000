function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1){
  array.push("I am 1 strange loop.");
  }
  else{
  console.log(`I am ${i} strange loops.`);
  }
  }
  return array;
}
function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  if (number === 0){
    return 'done';
  }
  }
  function doWhileLoop(number) {
    function incrementVariable() {
      number = number + 1;
      return number;
    }
    do {
      console.log("I run once regardless.");
    } while 
    (incrementVariable() < number);
  }