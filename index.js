var kittens = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}