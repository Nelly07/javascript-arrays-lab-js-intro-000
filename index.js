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
function prependKitten(Broom){
  return [...kittens,Broom];
}
function prependKitten(Arnold){
  return [Arnold,...kittens];
}
function removeLastKitten(kittens){
  return kittens.slice(2);
}
function removeFirstKitten(kittens){
  return kittens.slice(1);
}
