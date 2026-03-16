export function creerDetecteurTripleClic(callback, seuil = 3) {
  let clicks = 0;

  return function onClick() {
    clicks++;
    if (clicks >= seuil) {
      callback();
      clicks = 0;
      return true;
    }
    return false;
  };
}
