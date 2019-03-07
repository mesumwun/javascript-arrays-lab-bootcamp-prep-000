var kittens = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}