
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push('Ralph');
}
function destructivelyPrependCat (name) {
    cats.unshift("Bob");
    cats.push(name);
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat (){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    return[...cats,'Broom'];
}
function prependCat (name){
    return ['Arnold', ...cats];
}
function removeFirstCat(){
    return cats.slice(1);
}
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}
