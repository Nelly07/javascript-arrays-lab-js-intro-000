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
function prependKitten(name){
  return [...kittens,name];
}
function prependKitten(name){
  return [name,...kittens];
}
function removeLastKitten(){
  return kittens.slice(0, kittens.lenght-1);
}
function removeFirstKitten(kittens){
  return kittens.slice(1);
}
