var kittens = ["Milo", "Otis", "Garfield"];
 //define your array here
// Add your functions and code here
function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
  return kittens;
}
function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  return [...kittens,name];
}
function prependKitten(name){
  return [name,...kittens];
}
function removeLastKitten(){
  var newKittens=kittens.slice(0, kittens.lenght-2);
  return newKittens;
}
function removeFirstKitten(){
  return kittens.slice(1);
}
