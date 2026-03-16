const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function creerDetecteurKonami(callback) {
  let pos = 0;

  return function onKey(key) {
    if (key === SEQUENCE[pos]) {
      pos++;
      if (pos === SEQUENCE.length) {
        pos = 0;
        callback();
        return true;
      }
    } else {
      pos = key === SEQUENCE[0] ? 1 : 0;
    }
    return false;
  };
}
